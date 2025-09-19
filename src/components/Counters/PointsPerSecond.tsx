import { useEffect } from "react";
import { EarnPointsProps } from "../../types/GameState";

const AutoPoints = ({ pointsPS, setPoints }: EarnPointsProps) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + pointsPS); // add points every second
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [pointsPS, setPoints]);

  return null; // this component only runs logic, no UI
};

export default AutoPoints;
