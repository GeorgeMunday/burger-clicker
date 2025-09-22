import { useState } from "react";
import { EarnPointsProps } from "../../types/GameState";

const EarnPoints = ({ num = 0, points, setPoints }: EarnPointsProps) => {
  const [pop, setPop] = useState(false);
  const handleClick = () => {
    setPoints(points + num);
    setPop(true);
    setTimeout(() => setPop(false), 150);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex flex-col items-center justify-center bg-[#f5ecd7] border-8 border-[#7c5c36] rounded-full shadow-2xl hover:bg-[#e7dbc3] focus:outline-none transition-all duration-150 w-56 h-56 mx-auto my-10 ${pop ? "scale-110" : ""}`}
        aria-label="Click the burger to earn points"
        style={{ boxShadow: "0 8px 32px 0 rgba(124,92,54,0.25)" }}
      >
        <img
          src="/burger.png"
          alt="Burger"
          className={`w-40 h-40 mb-2 select-none drop-shadow-xl ${pop ? "scale-110" : ""}`}
          draggable="false"
        />
      </button>
    </>
  );
};

export default EarnPoints;
