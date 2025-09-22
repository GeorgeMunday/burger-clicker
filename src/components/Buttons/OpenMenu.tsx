import { useState } from "react";
import { EarnPointsProps } from "../../types/GameState";
import BuyItems from "../Menus/BuyItems";

const OpenMenu = ({
  setNum,
  points,
  num,
  setPoints,
  pointsPS,
  setPointsPS,
  levelCap,
  onNextLevel,
  canGoNext,
}: EarnPointsProps) => {
  const buttonStyle =
    "flex items-center gap-2 px-5 py-2 bg-[#7c5c36] text-[#f5ecd7] rounded-full shadow-lg font-bold border-2 border-[#a6895b] hover:bg-[#a6895b] hover:scale-105 transition-all text-lg focus:outline-none focus:ring-4 focus:ring-[#e7dbc3]";
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  if (!menu) {
    return (
      <button className={buttonStyle} onClick={handleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        Buy Menu
      </button>
    );
  } else {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <div className="relative w-full max-w-md mx-auto bg-[#f5ecd7] border border-[#a6895b] rounded-2xl shadow-2xl p-6 flex flex-col items-center">
          <button
            className="absolute top-3 right-3 px-3 py-1 bg-[#7c5c36] text-[#f5ecd7] rounded-full shadow border border-[#a6895b] hover:bg-[#a6895b] transition-colors text-sm"
            onClick={handleMenu}
            aria-label="Close Buy Menu"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4 text-[#7c5c36]">
            Buy Upgrades
          </h2>
          <div className="w-full">
            <BuyItems
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
          </div>
        </div>
      </div>
    );
  }
};

export default OpenMenu;
