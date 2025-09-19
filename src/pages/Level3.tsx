import Heading from "../components/Banners/Heading";
import EarnPoints from "../components/Buttons/EarnPoints";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import NextLevels from "../components/Navigators/NextLevels";
import OpenMenu from "../components/Buttons/OpenMenu";
import PointsPerSecond from "../components/Counters/PointsPerSecond";
import type { EarnPointsProps } from "../types/GameState";

const Level3: React.FC<EarnPointsProps> = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
  num,
  setNum,
  pointsPS,
  setPointsPS,
}) => {
  return (
    <>
      <Heading />
      <NewLevelCountDown levelCap={levelCap} points={points} />
      <Points points={points} />
      <EarnPoints num={num} points={points} setPoints={setPoints} />
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
