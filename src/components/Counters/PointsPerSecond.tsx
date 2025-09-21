import { useEffect } from "react";
import { EarnPointsProps } from "../../types/GameState";

const AutoPoints = ({ pointsPS, setPoints }: EarnPointsProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + pointsPS);
    }, 1000);

    return () => clearInterval(interval);
  }, [pointsPS, setPoints]);

  return null;
};

export default AutoPoints;
