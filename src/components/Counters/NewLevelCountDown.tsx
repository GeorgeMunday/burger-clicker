import { EarnPointsProps } from "../../types/EarnPointsProps";

const NewLevelCountDown = ({ levelCap, points }: EarnPointsProps) => {
  const progress = Math.min((points / levelCap) * 100, 100);

  return (
    <div className="space-y-2">
      {/* Progress bar */}
      <div className="w-full bg-gray-200  h-15 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-15  transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Text below */}
      {points < levelCap ? (
        <div className="">{levelCap - points} points left</div>
      ) : (
        <div>Go to next level</div>
      )}
    </div>
  );
};

export default NewLevelCountDown;
