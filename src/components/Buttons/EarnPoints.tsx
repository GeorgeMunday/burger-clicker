import { EarnPointsProps } from "../../types/EarnPointsProps";

const EarnPoints = ({ num = 0, points, setPoints }: EarnPointsProps) => {
  const handleClick = () => {
    setPoints(points + num);
  };

  return (
    <button onClick={handleClick} className="p-7 bg-slate-500">
      Click Me!
    </button>
  );
};

export default EarnPoints;
