// components/SaveProgressButton.tsx

import { doc, updateDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "../../firebase/firebase";

type SaveProgressButtonProps = {
  currentUser: User;
  points: number;
  levelState: number;
  num: number;
  pointsPs: number;
};

export default function SaveProgressButton({
  currentUser,
  points,
  levelState,
  num,
  pointsPs,
}: SaveProgressButtonProps) {
  const handleSave = async () => {
    try {
      await updateDoc(doc(db, "users", currentUser.uid), {
        points,
        level: levelState,
        num,
        pointsPs,
      });
      console.log("Stats saved to Firestore");
    } catch (error) {
      console.error("Error saving stats:", error);
    }
  };

  return <button onClick={handleSave}>Save your progress</button>;
}
