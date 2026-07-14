"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { quizLookup } from "@/data/quizzes";
import type { Quiz } from "@/types/quiz";

type QuizPlayerProps = {
  quiz: Quiz;
};

function getResult(quiz: Quiz, answers: Array<string | null>) {
  const totals = Object.fromEntries(quiz.outcomes.map((outcome) => [outcome.id, 0]));

  quiz.questions.forEach((question, index) => {
    const selectedId = answers[index];
    if (!selectedId) {
      return;
    }

    const option = question.options.find((item) => item.id === selectedId);
    if (!option) {
      return;
    }

    Object.entries(option.scores).forEach(([outcomeId, score]) => {
      totals[outcomeId] = (totals[outcomeId] ?? 0) + score;
    });
  });

  const bestOutcomeId = Object.entries(totals).sort((a, b) => b[1] - a[1])[0]?.[0];
  return quiz.outcomes.find((outcome) => outcome.id === bestOutcomeId) ?? quiz.outcomes[0];
}

export default function QuizPlayer({ quiz }: QuizPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<string | null>>(
    Array(quiz.questions.length).fill(null),
  );

  const currentQuestion = quiz.questions[currentIndex];
  const answeredCount = answers.filter(Boolean).length;
  const progress = (answeredCount / quiz.questions.length) * 100;
  const completed = answers.every(Boolean);

  const result = useMemo(() => {
    if (!completed) {
      return null;
    }
    return getResult(quiz, answers);
  }, [answers, completed, quiz]);

  const handleSelect = (optionId: string) => {
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = optionId;
    setAnswers(nextAnswers);
  };

  const goNext = () => {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setAnswers(Array(quiz.questions.length).fill(null));
  };

  return (
    <div className="quiz-player">
      <div className="quiz-player-header">
        <div>
          <p className="small-label">{quiz.category}</p>
          <h1>{quiz.title}</h1>
        </div>
        <p className="quiz-meta-text">{quiz.description}</p>
      </div>

      <div className="progress-card">
        <div className="progress-copy">
          <span>Progress</span>
          <strong>
            {answeredCount}/{quiz.questions.length}
          </strong>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {!completed ? (
        <section className="question-card" aria-labelledby={`question-${currentQuestion.id}`}>
          <p className="question-count">
            Question {currentIndex + 1} of {quiz.questions.length}
          </p>
          <h2 id={`question-${currentQuestion.id}`}>{currentQuestion.prompt}</h2>

          <div className="answer-list" role="list">
            {currentQuestion.options.map((option) => {
              const selected = answers[currentIndex] === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  className={`answer-button${selected ? " selected" : ""}`}
                  onClick={() => handleSelect(option.id)}
                  aria-pressed={selected}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          <div className="quiz-actions">
            <button className="button button-secondary" type="button" onClick={goPrevious} disabled={currentIndex === 0}>
              Previous
            </button>
            <button className="button button-primary" type="button" onClick={goNext} disabled={!answers[currentIndex]}>
              Next
              <ArrowRight size={17} />
            </button>
          </div>
        </section>
      ) : (
        <section className="result-card" aria-live="polite">
          <p className="small-label">Your result</p>
          <h2>{result?.title}</h2>
          <p>{result?.description}</p>

          <div className="tip-list">
            {result?.tips.map((tip) => (
              <div key={tip} className="benefit-item">
                <span aria-hidden="true">✦</span>
                <p>{tip}</p>
              </div>
            ))}
          </div>

          <div className="quiz-actions">
            <button className="button button-secondary" type="button" onClick={restart}>
              <RotateCcw size={17} />
              Restart quiz
            </button>
            <Link className="button button-primary" href="/quizzes/">
              Explore more quizzes
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="page-card">
            <h3>Helpful note</h3>
            <p>
              These results are meant to be informative and educational. They are not a diagnosis, and they do not predict your future behavior with certainty.
            </p>
          </div>
        </section>
      )}

      <section className="page-card">
        <h3>Frequently asked questions</h3>
        <div className="faq-list">
          {quiz.faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-card">
        <h3>Related quizzes</h3>
        <div className="category-grid">
          {quiz.relatedQuizzes.map((slug) => {
            const relatedQuiz = quizLookup[slug];
            if (!relatedQuiz) {
              return null;
            }

            return (
              <Link key={relatedQuiz.slug} href={`/quiz/${relatedQuiz.slug}/`} className="category-card">
                <h4>{relatedQuiz.title}</h4>
                <p>{relatedQuiz.description}</p>
                <span className="card-link">
                  Open quiz
                  <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
