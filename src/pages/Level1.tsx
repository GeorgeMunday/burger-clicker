import EarnPoints from "../components/Buttons/EarnPoints";
import OpenMenu from "../components/Buttons/OpenMenu";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import PointsPerSecond from "../components/Counters/PointsPerSecond";
import NextLevels from "../components/Navigators/NextLevels";
import { EarnPointsProps } from "../types/GameState";
import Logout from "../components/Buttons/Logout";

const Level1 = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
  num,
  setNum,
  setPointsPS,
  pointsPS,
  onLogout,
}: EarnPointsProps & { onLogout: () => void }) => {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-[#f5ecd7] text-[#7c5c36] p-4">
      <div className="w-[90vw] h-[90vh] max-w-6xl max-h-[900px] rounded-3xl bg-[#e7dbc3] shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col border border-[#7c5c36] overflow-auto">
        <Logout onLogout={onLogout} />
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
        <div className="flex-1 flex flex-col justify-end">
          <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />
        </div>
      </div>
    </main>
  );
};

export default Level1;
