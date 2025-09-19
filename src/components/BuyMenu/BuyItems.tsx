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
  const cost = 10;
  const power = 1;
  const amount = 50;
  const rate = 1;

  const handleNumBuy = () => {
    if (points >= cost) {
      setPoints(points - cost);
      setNum(num + power);
    }
  };

  const handlePSBuy = async () => {
    if (points >= amount) {
      const newPoints = points - amount;
      const newPointsPS = pointsPS + rate;
      setPoints(newPoints);
      setPointsPS(newPointsPS);

      // Save to Firestore immediately if logged in
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
          await updateDoc(doc(db, "users", user.uid), {
            points: newPoints,
            pointsPs: newPointsPS,
          });
        }
      } catch (err) {
        console.error("Failed to save pointsPS to Firestore", err);
      }
    }
  };

  return (
    <>
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handleNumBuy}
          disabled={points < cost}
        >
          Buy +{power} (Cost: {cost})
        </button>
      </div>
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={handlePSBuy}
          disabled={points < amount}
        >
          rate +{rate} (Cost: {amount})
        </button>
      </div>
    </>
  );
};

export default BuyItems;
