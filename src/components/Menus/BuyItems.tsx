import { EarnPointsProps } from "../../types/GameState";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

const BuyItems = ({
  points,
  setPoints,
  num,
  setNum,
  pointsPS,
  setPointsPS,
}: EarnPointsProps) => {
  // Button configs for upgrades
  const upgrades = [
    {
      label: `Buy +1 (Cost: 10)`,
      cost: 10,
      effect: () => setNum(num + 1),
      canBuy: points >= 10,
    },
    {
      label: `Buy +5 (Cost: 40)`,
      cost: 40,
      effect: () => setNum(num + 5),
      canBuy: points >= 40,
    },
    {
      label: `Buy +10 (Cost: 70)`,
      cost: 70,
      effect: () => setNum(num + 10),
      canBuy: points >= 70,
    },
    {
      label: `Rate +1 (Cost: 50)`,
      cost: 50,
      effect: () => setPointsPS(pointsPS + 1),
      canBuy: points >= 50,
    },
    {
      label: `Rate +5 (Cost: 200)`,
      cost: 200,
      effect: () => setPointsPS(pointsPS + 5),
      canBuy: points >= 200,
    },
    {
      label: `Rate +10 (Cost: 350)`,
      cost: 350,
      effect: () => setPointsPS(pointsPS + 10),
      canBuy: points >= 350,
    },
  ];

  // Handles all upgrades
  const handleUpgrade = async (cost: number, effect: () => void) => {
    if (points >= cost) {
      setPoints(points - cost);
      effect();
      // Save to Firestore immediately if logged in
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          await updateDoc(doc(db, "users", user.uid), {
            points: points - cost,
            // pointsPs and num will be updated on next render
          });
        }
      } catch (err) {
        console.error("Failed to save upgrade to Firestore", err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {upgrades.map((upg, i) => (
        <button
          key={i}
          className="bg-[#7c5c36] text-[#f5ecd7] px-4 py-2 rounded shadow font-semibold disabled:opacity-50 border border-[#a6895b] hover:bg-[#a6895b] transition-colors"
          onClick={() => handleUpgrade(upg.cost, upg.effect)}
          disabled={!upg.canBuy}
        >
          {upg.label}
        </button>
      ))}
    </div>
  );
};

export default BuyItems;
