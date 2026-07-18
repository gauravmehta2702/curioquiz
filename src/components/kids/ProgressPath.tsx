type ProgressPathProps = {
  level: number;
  completedQuestions: number;
  highestUnlocked: number;
};

export default function ProgressPath({ level, completedQuestions, highestUnlocked }: ProgressPathProps) {
  const segments = [1, 2, 3, 4];

  return (
    <div className="garden-path" aria-label="Garden progress path">
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
        <span>Level {level}</span>
        <span>{completedQuestions}/20 questions</span>
      </div>
    </div>
  );
}
