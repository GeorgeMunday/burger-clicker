import { useState } from "react";
import Heading from "../components/Banners/Heading";
import EarnPoints from "../components/Buttons/EarnPoints";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import NextLevels from "../components/Navigators/NextLevels";
import { EarnPointsProps } from "../types/EarnPointsProps";

const Level2 = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
}: EarnPointsProps) => {
  const [num, setNum] = useState(1);
  return (
    <>
      <Heading />
      <NewLevelCountDown levelCap={levelCap} points={points} />
      <Points points={points} />
      <EarnPoints num={num} points={points} setPoints={setPoints} />
      <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />
    </>
  );
};

export default Level2;
