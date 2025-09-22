import Logout from "../components/Buttons/Logout";
import EarnPoints from "../components/Buttons/EarnPoints";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import NextLevels from "../components/Navigators/NextLevels";
import OpenMenu from "../components/Buttons/OpenMenu";
import PointsPerSecond from "../components/Counters/PointsPerSecond";
import type { EarnPointsProps } from "../types/GameState";

const Level2: React.FC<EarnPointsProps & { onLogout: () => void }> = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
  num,
  setNum,
  pointsPS,
  setPointsPS,
  onLogout,
}) => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-[#f5ecd7] text-[#7c5c36] p-4">
      <div className="w-[90vw] h-[90vh] max-w-6xl max-h-[900px] rounded-3xl bg-[#e7dbc3] shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col border border-[#7c5c36] overflow-auto">
        <div className="flex w-full justify-between items-center mb-2">
          <Logout onLogout={onLogout} />
          <OpenMenu
            pointsPS={pointsPS}
            setPoints={setPoints}
            setPointsPS={setPointsPS}
            points={points}
            num={num}
            setNum={setNum}
            levelCap={levelCap}
            onNextLevel={onNextLevel}
            canGoNext={canGoNext}
          />
        </div>
        <NewLevelCountDown
          levelCap={levelCap}
          points={points}
          num={num}
          setNum={setNum}
          setPoints={setPoints}
          pointsPS={pointsPS}
          setPointsPS={setPointsPS}
        />
        <Points
          points={points}
          num={num}
          setNum={setNum}
          setPoints={setPoints}
          pointsPS={pointsPS}
          setPointsPS={setPointsPS}
          levelCap={levelCap}
          onNextLevel={onNextLevel}
          canGoNext={canGoNext}
        />
        <EarnPoints
          num={num}
          points={points}
          setPoints={setPoints}
          setNum={setNum}
          pointsPS={pointsPS}
          setPointsPS={setPointsPS}
          levelCap={levelCap}
          onNextLevel={onNextLevel}
          canGoNext={canGoNext}
        />
        <div className="flex-1 flex flex-col justify-end">
          <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />
        </div>
        <PointsPerSecond
          pointsPS={pointsPS}
          setPoints={setPoints}
          setPointsPS={setPointsPS}
          points={points}
          num={num}
          setNum={setNum}
          levelCap={levelCap}
          onNextLevel={onNextLevel}
          canGoNext={canGoNext}
        />
      </div>
    </main>
  );
};

export default Level2;
