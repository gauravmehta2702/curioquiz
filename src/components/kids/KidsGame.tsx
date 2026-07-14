"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import GameControls from "@/components/kids/GameControls";
import ProgressPath from "@/components/kids/ProgressPath";
import RewardSummary from "@/components/kids/RewardSummary";
import { kidsBadges, kidsQuestions } from "@/data/kidsQuestions";
import type { KidsProgress, KidsQuestion } from "@/types/kidsGame";

const STORAGE_KEY = "curioquiz-kids-progress";
const QUESTION_DELAY_MS = 950;

function createInitialProgress(): KidsProgress {
  return {
    highestLevelUnlocked: 1,
    totalStars: 0,
    totalCoins: 0,
    earnedBadges: [],
    completed: false,
  };
}

function playTone(type: "correct" | "retry" | "level") {
  if (typeof window === "undefined") return;
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;

  const audioContext = new AudioContextClass();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  const frequencyMap = {
    correct: 660,
    retry: 260,
    level: 880,
  } as const;

  oscillator.frequency.value = frequencyMap[type];
  oscillator.type = "sine";
  gainNode.gain.value = 0.08;
  gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.35);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.35);
}

export default function KidsGame() {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const [progress, setProgress] = useState<KidsProgress>(createInitialProgress);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [narrationEnabled, setNarrationEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState<KidsQuestion | null>(kidsQuestions[0]);

  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const musicRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const musicOscillatorRef = useRef<OscillatorNode | null>(null);
  const musicGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as KidsProgress;
        setProgress(parsed);
        setCurrentLevel(parsed.highestLevelUnlocked);
      } catch {
        // ignore invalid storage
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    if (!started || !narrationEnabled || !currentQuestion) return;
    if (typeof window === "undefined") return;
    if (typeof window.speechSynthesis === "undefined") return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${currentQuestion.instruction}. ${currentQuestion.question}`);
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);

    return () => window.speechSynthesis.cancel();
  }, [currentQuestion, narrationEnabled, started]);

  useEffect(() => {
    if (!musicEnabled) {
      if (musicOscillatorRef.current) {
        musicOscillatorRef.current.stop();
        musicOscillatorRef.current.disconnect();
        musicOscillatorRef.current = null;
      }
      return;
    }

    if (typeof window === "undefined") return;

    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const gainNode = context.createGain();
    const oscillator = context.createOscillator();
    gainNode.gain.value = 0.015;
    gainNode.connect(context.destination);
    oscillator.connect(gainNode);
    oscillator.type = "sine";
    oscillator.frequency.value = 392;
    oscillator.detune.value = 5;
    oscillator.start();
    oscillator.stop(context.currentTime + 0.7);
    musicRef.current = context;
    masterGainRef.current = gainNode;
    musicOscillatorRef.current = oscillator;
    musicGainRef.current = gainNode;
  }, [musicEnabled]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
      if (musicOscillatorRef.current) {
        musicOscillatorRef.current.stop();
      }
      if (musicRef.current) {
        musicRef.current.close();
      }
    };
  }, []);

  const currentLevelQuestions = useMemo(() => kidsQuestions.filter((question) => question.level === currentLevel), [currentLevel]);

  useEffect(() => {
    if (!started) return;
    const levelQuestion = currentLevelQuestions[questionIndex % 5];
    if (levelQuestion) {
      setCurrentQuestion(levelQuestion);
    }
  }, [currentLevel, currentLevelQuestions, questionIndex, started]);

  const handleAnswer = (answer: string) => {
    if (!currentQuestion) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      if (soundEnabled) playTone("correct");
      setFeedback(currentQuestion.explanation);
      const nextProgress = {
        ...progress,
        totalStars: progress.totalStars + 1,
        totalCoins: progress.totalCoins + 10,
      };
      setProgress(nextProgress);
      const nextQuestionIndex = questionIndex + 1;
      window.setTimeout(() => {
        if (nextQuestionIndex >= 20) {
          const finalProgress = {
            ...nextProgress,
            completed: true,
            earnedBadges: [...new Set([...nextProgress.earnedBadges, "level4"])],
          };
          setProgress(finalProgress);
          setShowFinalScreen(true);
          setStarted(false);
          return;
        }

        const nextLevel = Math.floor(nextQuestionIndex / 5) + 1;
        const isLevelBoundary = nextQuestionIndex % 5 === 0;
        if (isLevelBoundary) {
          const levelBadgeId = `level${nextLevel}`;
          const nextBadges = [...new Set([...nextProgress.earnedBadges, levelBadgeId])];
          const updatedProgress = {
            ...nextProgress,
            earnedBadges: nextBadges,
            highestLevelUnlocked: Math.max(progress.highestLevelUnlocked, nextLevel),
          };
          setProgress(updatedProgress);
          setCurrentLevel(nextLevel);
          setQuestionIndex(nextQuestionIndex);
          setShowLevelComplete(true);
          setSelectedAnswer(null);
          setFeedback("");
          if (soundEnabled) playTone("level");
          return;
        }

        setQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
        setFeedback("");
      }, QUESTION_DELAY_MS);
    } else {
      if (soundEnabled) playTone("retry");
      setFeedback("Good try—have another go!");
    }
  };

  const startGame = () => {
    setStarted(true);
    setShowLevelComplete(false);
    setShowFinalScreen(false);
    setQuestionIndex(0);
    setCurrentLevel(1);
    setSelectedAnswer(null);
    setFeedback("");
  };

  const repeatQuestion = () => {
    if (!currentQuestion) return;
    if (typeof window !== "undefined" && typeof window.speechSynthesis !== "undefined") {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(`${currentQuestion.instruction}. ${currentQuestion.question}`);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const resetProgress = () => {
    const cleared = createInitialProgress();
    setProgress(cleared);
    setStarted(false);
    setShowLevelComplete(false);
    setShowFinalScreen(false);
    setQuestionIndex(0);
    setCurrentLevel(1);
    setSelectedAnswer(null);
    setFeedback("");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cleared));
    }
  };

  const continueLevel = () => {
    setShowLevelComplete(false);
    setSelectedAnswer(null);
    setFeedback("");
  };

  const badgeNames = kidsBadges.filter((badge) => progress.earnedBadges.includes(badge.id)).map((badge) => badge.name);

  return (
    <div className="kids-game-shell">
      <section className="kids-title-card">
        <div className="kids-heading">
          <p className="small-label">Curio’s Treasure Garden</p>
          <h1>Start a gentle learning adventure</h1>
          <p>
            Help Curio collect stars, coins and badges as you journey through maths, spelling, patterns and logic.
          </p>
        </div>
        <div className="mascot-card kids-mascot-card" aria-label="Curio mascot">
          <div className="mascot-face">🦉</div>
          <p className="small-label">Friendly guide</p>
          <h2>Curio is ready</h2>
          <p>Tap start and enjoy a warm, calm learning game for children aged 6–7.</p>
        </div>
      </section>

      <div className="kids-game-card">
        <GameControls
          musicEnabled={musicEnabled}
          narrationEnabled={narrationEnabled}
          soundEnabled={soundEnabled}
          onToggleMusic={() => setMusicEnabled((value) => !value)}
          onToggleNarration={() => setNarrationEnabled((value) => !value)}
          onToggleSound={() => setSoundEnabled((value) => !value)}
          onRepeatQuestion={repeatQuestion}
          onResetProgress={resetProgress}
        />

        <RewardSummary stars={progress.totalStars} coins={progress.totalCoins} badges={badgeNames} />

        <ProgressPath level={currentLevel} completedQuestions={questionIndex} highestUnlocked={progress.highestLevelUnlocked} />

        {!started && !showFinalScreen && !showLevelComplete && (
          <div className="kids-start-card">
            <h2>Adventure is waiting</h2>
            <p>Play one question at a time, enjoy gentle rewards and explore four garden levels together.</p>
            <button className="button button-primary" type="button" onClick={startGame}>
              Start Adventure
              <Sparkles size={17} />
            </button>
          </div>
        )}

        {showLevelComplete && (
          <div className="kids-start-card level-card">
            <p className="small-label">Level complete</p>
            <h2>Lovely work!</h2>
            <p>You reached the next garden section and earned a new badge.</p>
            <button className="button button-primary" type="button" onClick={continueLevel}>
              Continue
              <ArrowRight size={17} />
            </button>
          </div>
        )}

        {showFinalScreen && (
          <div className="kids-start-card final-card">
            <p className="small-label">Garden complete</p>
            <h2>Curio’s Treasure Garden is complete</h2>
            <p>You collected stars, coins and badges on the full adventure.</p>
            <div className="final-badges">
              {badgeNames.map((badge) => (
                <span key={badge} className="badge-pill">
                  {badge}
                </span>
              ))}
            </div>
            <div className="reward-summary final-rewards">
              <div className="reward-pill">
                <span aria-hidden="true">⭐</span>
                <strong>{progress.totalStars}</strong>
              </div>
              <div className="reward-pill">
                <span aria-hidden="true">🪙</span>
                <strong>{progress.totalCoins}</strong>
              </div>
            </div>
            <div className="garden-finish" aria-hidden="true">
              <span>🌼</span>
              <span>🌳</span>
              <span>🌈</span>
              <span>🏆</span>
            </div>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={startGame}>
                Play Again
              </button>
              <Link className="button button-secondary" href="/kids/">
                Return to CurioKids
              </Link>
            </div>
          </div>
        )}

        {started && !showLevelComplete && !showFinalScreen && currentQuestion && (
          <div className="question-card kids-question-card">
            <div className="question-heading">
              <div>
                <p className="small-label">Level {currentLevel}</p>
                <h2>{currentQuestion.question}</h2>
              </div>
              <div className="question-meta">
                <span>Question {questionIndex + 1}</span>
                <span>{currentQuestion.category}</span>
              </div>
            </div>

            {currentQuestion.visual ? <div className="visual-stage">{currentQuestion.visual}</div> : null}

            <div className="answer-list kids-answer-list">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`answer-button kid-answer-button${selectedAnswer === option ? " selected" : ""}`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="feedback-region" aria-live="polite">
              <p>{feedback}</p>
            </div>
          </div>
        )}
      </div>

      <section className="page-card kids-info-card">
        <h2>Parent information</h2>
        <p>
          The game is designed for children aged 6–7 and uses simple, playful questions to support early learning. Progress stays in this browser only, and there are no purchases or external links during play.
        </p>
      </section>
    </div>
  );
}
