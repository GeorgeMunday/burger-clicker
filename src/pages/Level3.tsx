import Logout from "../components/Buttons/Logout";
import EarnPoints from "../components/Buttons/EarnPoints";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import NextLevels from "../components/Navigators/NextLevels";
import OpenMenu from "../components/Buttons/OpenMenu";
import PointsPerSecond from "../components/Counters/PointsPerSecond";
import type { EarnPointsProps } from "../types/GameState";

const Level3: React.FC<EarnPointsProps & { onLogout: () => void }> = ({
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
    <>
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
      <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />
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
    </>
  );
};

export default Level3;
