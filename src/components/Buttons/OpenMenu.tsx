import { useState } from "react";
import { EarnPointsProps } from "../../types/GameState";
import BuyItems from "../BuyMenu/BuyItems";

const OpenMenu = ({
  setNum,
  points,
  num,
  setPoints,
  pointsPS,
  setPointsPS,
}: EarnPointsProps) => {
  const buttonStyle = "px-4 py-2 bg-blue-500 text-white rounded";
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
        <div className="mt-2 p-4 border rounded shadow">
          <BuyItems
            points={points}
            num={num}
            setNum={setNum}
            setPoints={setPoints}
            pointsPS={pointsPS}
            setPointsPS={setPointsPS}
          />
        </div>
      </div>
    );
  }
};

export default OpenMenu;
