type NextLevelsProps = {
  canGoNext: boolean;
  onNextLevel: () => void;
};

const NextLevels = ({ canGoNext, onNextLevel }: NextLevelsProps) => {
  if (!canGoNext)
    return (
      <button className="mt-4 p-2 bg-green-300 text-white rounded">
        Next Level
      </button>
    );
  return (
    <button
      onClick={onNextLevel}
      className="mt-4 p-2 bg-green-500 text-white rounded"
    >
      Next Level
    </button>
  );
};

export default NextLevels;
