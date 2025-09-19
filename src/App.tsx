import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import { app, db } from "./firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Register from "./pages/auth/Regester";
import Login from "./pages/auth/Login";
import Level3 from "./pages/Level3";

const levelCaps = [100, 2500, 10000, 2500000, 100000];

function App() {
  const [points, setPoints] = useState(0);
  const [levelState, setLevelState] = useState(1);
  const [num, setNum] = useState(1);
  const [pointsPs, setPointsPs] = useState(0);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showRegister, setShowRegister] = useState(false);
  const auth = getAuth(app);

  // Listen for login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setPoints(data.points ?? 0);
          setLevelState(data.level ?? 1);
          setNum(data.num ?? 1);
          setPointsPs(data.pointsPs ?? 0);
        }
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleNextLevel = () => {
    setLevelState((prev) => prev + 1);
    setPoints(0);
  };

  const handleSave = async () => {
    if (!currentUser) return;
    await updateDoc(doc(db, "users", currentUser.uid), {
      points,
      level: levelState,
      num,
      pointsPs,
    });
    console.log("Stats saved to Firestore");
  };

  const handleLogout = async () => {
    await signOut(auth);
    console.log("Logged out");
  };

  //  Not logged in → login/register
  if (!currentUser) {
    if (showRegister) {
      return (
        <>
          <button onClick={() => setShowRegister(false)}>Back to Login</button>
          <Register />
        </>
      );
    }
    return (
      <>
        <button onClick={() => setShowRegister(true)}>Register</button>
        <Login />
      </>
    );
  }
  if (levelState === 1) {
    return (
      <>
        <Level1
          points={points}
          setPoints={setPoints}
          levelCap={levelCaps[0]}
          onNextLevel={handleNextLevel}
          canGoNext={points >= levelCaps[0]}
          num={num}
          setNum={setNum}
          pointsPS={pointsPs}
          setPointsPS={setPointsPs}
        />
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Progress
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </>
    );
  }

  if (levelState === 2) {
    return (
      <>
        <Level2
          points={points}
          setPoints={setPoints}
          levelCap={levelCaps[1]}
          onNextLevel={handleNextLevel}
          canGoNext={points >= levelCaps[1]}
          num={num}
          setNum={setNum}
          pointsPS={pointsPs}
          setPointsPS={setPointsPs}
        />
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Progress
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </>
    );
  }
  if (levelState === 3) {
    return (
      <>
        <Level3
          points={points}
          setPoints={setPoints}
          levelCap={levelCaps[2]}
          onNextLevel={handleNextLevel}
          canGoNext={points >= levelCaps[2]}
          num={num}
          setNum={setNum}
          pointsPS={pointsPs}
          setPointsPS={setPointsPs}
        />
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save Progress
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </>
    );
  }

  return null;
}

export default App;
