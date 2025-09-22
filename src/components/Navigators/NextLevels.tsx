type NextLevelsProps = {
  canGoNext: boolean;
  onNextLevel: () => void;
};

const NextLevels = ({ canGoNext, onNextLevel }: NextLevelsProps) => {
  const baseStyle =
    "mt-4 px-6 py-3 rounded-xl font-bold shadow border border-[#a6895b] text-lg transition-colors";
  if (!canGoNext)
    return (
      <button
        className={
          baseStyle +
          " bg-[#e7dbc3] text-[#a6895b] cursor-not-allowed opacity-60"
        }
        disabled
      >
        Next Level
      </button>
    );
  return (
    <button
      onClick={onNextLevel}
      className={baseStyle + " bg-[#7c5c36] text-[#f5ecd7] hover:bg-[#a6895b]"}
    >
      Next Level
    </button>
  );
};

export default NextLevels;
