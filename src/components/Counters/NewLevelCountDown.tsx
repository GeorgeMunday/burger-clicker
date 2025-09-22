import { EarnPointsProps } from "../../types/GameState";

const NewLevelCountDown = ({ levelCap, points }: EarnPointsProps) => {
  const progress = Math.min((points / levelCap) * 100, 100);

  return (
    <div className="space-y-2">
      {/* Progress bar */}
      <div className="w-full bg-[#e7dbc3] h-6 rounded-full border border-[#7c5c36]">
        <div
          className="bg-[#7c5c36] h-6 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Text below */}
      {points < levelCap ? (
        <div className="text-[#7c5c36] font-semibold">
          {levelCap - points} points left
        </div>
      ) : (
        <div className="text-[#7c5c36] font-semibold">Go to next level</div>
      )}
    </div>
  );
};

export default NewLevelCountDown;
