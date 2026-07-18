type ProgressPathProps = {
  level: number;
  completedQuestions: number;
  highestUnlocked: number;
  totalLevels: number;
  totalQuestions: number;
};

export default function ProgressPath({
  level,
  completedQuestions,
  highestUnlocked,
  totalLevels,
  totalQuestions,
}: ProgressPathProps) {
  const segments = Array.from({ length: totalLevels }, (_, index) => index + 1);

  return (
    <div className="garden-path" aria-label="Learning adventure progress path">
      <div className="path-line" />
      {segments.map((segment) => {
        const unlocked = segment <= highestUnlocked || segment === level;
        const current = segment === level;
        const complete = segment < level;

        return (
          <div key={segment} className={`path-node ${unlocked ? "unlocked" : "locked"} ${current ? "current" : ""} ${complete ? "complete" : ""}`}>
            <span>{segment}</span>
          </div>
        );
      })}
      <div className="path-caption">
        <span>Level {level} of {totalLevels}</span>
        <span>{Math.min(completedQuestions, totalQuestions)}/{totalQuestions} questions</span>
      </div>
    </div>
  );
}
