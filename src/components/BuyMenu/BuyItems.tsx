import { EarnPointsProps } from "../../types/EarnPointsProps";

const BuyItems = ({ points, setPoints, num, setNum }: EarnPointsProps) => {
  const cost = 10;
  const power = 1;

  const handleBuy = () => {
    if (points >= cost) {
      setPoints(points - cost);
      setNum(num + power);
    }
  };

  return (
    <div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleBuy}
        disabled={points < cost}
      >
        Buy +{power} (Cost: {cost})
      </button>
    </div>
  );
};

export default BuyItems;
