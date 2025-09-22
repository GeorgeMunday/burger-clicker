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
    <>
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
    </>
  );
};

export default Level1;
