import { EarnPointsProps } from "../../types/GameState";

const Points = ({ points }: EarnPointsProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-blue-700 drop-shadow mb-1">
        Points
      </span>
      <span className="text-5xl font-mono text-green-700 bg-green-100 rounded-xl px-8 py-2 shadow-inner border-2 border-green-200">
        {points}
      </span>
    </div>
  );
};

export default Points;
