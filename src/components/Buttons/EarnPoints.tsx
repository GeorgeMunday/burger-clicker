import { EarnPointsProps } from "../../types/GameState";

const EarnPoints = ({ num = 0, points, setPoints }: EarnPointsProps) => {
  const handleClick = () => {
    setPoints(points + num);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex flex-col items-center justify-center bg-[#f5ecd7] border-4 border-[#7c5c36] rounded-full shadow-md hover:bg-[#e7dbc3] focus:outline-none transition-colors w-32 h-32 mx-auto my-6"
        aria-label="Click the burger to earn points"
      >
        <img
          src="/burger.png"
          alt="Burger"
          className="w-20 h-20 mb-2 select-none"
          draggable="false"
        />
      </button>
    </>
  );
};

export default EarnPoints;
