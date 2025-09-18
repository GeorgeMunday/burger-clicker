import Heading from "../components/Banners/Heading";
import EarnPoints from "../components/Buttons/EarnPoints";
import OpenMenu from "../components/Buttons/OpenMenu";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import NextLevels from "../components/Navigators/NextLevels";
import { EarnPointsProps } from "../types/EarnPointsProps";

const Level1 = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
  num,
  setNum,
}: EarnPointsProps) => {
  return (
    <>
      <Heading />
      <NewLevelCountDown levelCap={levelCap} points={points} />
      <Points points={points} />
      <EarnPoints num={num} points={points} setPoints={setPoints} />
      <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />

      <OpenMenu
        points={points}
        setPoints={setPoints}
        num={num}
        setNum={setNum}
      />
    </>
  );
};

export default Level1;
