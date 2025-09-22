import { EarnPointsProps } from "../../types/GameState";

const Points = ({ points }: EarnPointsProps) => {
  return (
    <div className="flex flex-col items-center my-6">
      <span className="text-5xl font-extrabold text-[#7c5c36] mb-3 tracking-wide drop-shadow-lg">
        Points
      </span>
      <span className="text-7xl font-mono text-[#7c5c36] bg-[#f5ecd7] rounded-3xl px-16 py-6 shadow-2xl border-4 border-[#a6895b] animate-pulse-slow">
        {points}
      </span>
    </div>
  );
};

export default Points;
