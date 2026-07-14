type RewardSummaryProps = {
  stars: number;
  coins: number;
  badges: string[];
};

export default function RewardSummary({ stars, coins, badges }: RewardSummaryProps) {
  return (
    <div className="reward-summary">
      <div className="reward-pill">
        <span aria-hidden="true">⭐</span>
        <strong>{stars}</strong>
      </div>
      <div className="reward-pill">
        <span aria-hidden="true">🪙</span>
        <strong>{coins}</strong>
      </div>
      <div className="reward-pill">
        <span aria-hidden="true">🏅</span>
        <strong>{badges.length}</strong>
      </div>
    </div>
  );
}
