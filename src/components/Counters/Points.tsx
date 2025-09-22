import { EarnPointsProps } from "../../types/GameState";

const Points = ({ points }: EarnPointsProps) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-bold text-[#7c5c36] mb-1">Points</span>
      <span className="text-5xl font-mono text-[#7c5c36] bg-[#f5ecd7] rounded-xl px-8 py-2 shadow-inner border-2 border-[#e7dbc3]">
        {points}
      </span>
    </div>
  );
};

export default Points;
