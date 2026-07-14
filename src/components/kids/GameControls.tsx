import { Volume2, VolumeX, Ear, EarOff, RotateCcw } from "lucide-react";

type GameControlsProps = {
  musicEnabled: boolean;
  narrationEnabled: boolean;
  soundEnabled: boolean;
  onToggleMusic: () => void;
  onToggleNarration: () => void;
  onToggleSound: () => void;
  onRepeatQuestion: () => void;
  onResetProgress: () => void;
};

export default function GameControls({
  musicEnabled,
  narrationEnabled,
  soundEnabled,
  onToggleMusic,
  onToggleNarration,
  onToggleSound,
  onRepeatQuestion,
  onResetProgress,
}: GameControlsProps) {
  return (
    <div className="kid-controls">
      <button className="kid-icon-button" type="button" onClick={onToggleMusic} aria-pressed={musicEnabled}>
        {musicEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span>{musicEnabled ? "Music on" : "Music off"}</span>
      </button>
      <button className="kid-icon-button" type="button" onClick={onToggleNarration} aria-pressed={narrationEnabled}>
        {narrationEnabled ? <Ear size={18} /> : <EarOff size={18} />}
        <span>{narrationEnabled ? "Narration on" : "Narration off"}</span>
      </button>
      <button className="kid-icon-button" type="button" onClick={onToggleSound} aria-pressed={soundEnabled}>
        {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        <span>{soundEnabled ? "Sounds on" : "Sounds off"}</span>
      </button>
      <button className="kid-icon-button" type="button" onClick={onRepeatQuestion}>
        <RotateCcw size={18} />
        <span>Repeat</span>
      </button>
      <button className="kid-icon-button parent-control" type="button" onClick={onResetProgress}>
        <RotateCcw size={18} />
        <span>Reset</span>
      </button>
    </div>
  );
}
