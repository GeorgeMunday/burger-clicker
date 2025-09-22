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
    "px-4 py-2 bg-[#7c5c36] text-[#f5ecd7] rounded shadow font-semibold border border-[#a6895b] hover:bg-[#a6895b] transition-colors";
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  if (!menu) {
    return (
      <button className={buttonStyle} onClick={handleMenu}>
        Buy Menu
      </button>
    );
  } else {
    return (
      <div>
        <button className={buttonStyle} onClick={handleMenu}>
          Close Menu
        </button>
        <div className="mt-2 p-4 border border-[#a6895b] rounded-2xl shadow bg-[#f5ecd7]">
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
    );
  }
};

export default OpenMenu;
