import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import { app, db } from "./firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Home from "./pages/Home/Home";
import Final from "./pages/Final";

const levelCaps = [100, 2500, 10000];

function App() {
  // Game stats and points
  const [points, setPoints] = useState(0);
  const [levelState, setLevelState] = useState(1);
  const [num, setNum] = useState(1);
  const [pointsPs, setPointsPs] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showGame, setShowGame] = useState(false);

  const auth = getAuth(app);

  // listen for login
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
      setShowGame(false); // for logout
    });
    return () => unsubscribe();
  }, [auth]);

  // Handle leveling up
  const handleNextLevel = () => {
    setLevelState((prev) => prev + 1);
    setPoints(0);
  };

  // Save stats to Firestore
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

  // Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    console.log("Logged out");
  };

  if (!currentUser || !showGame) {
    return (
      <Home
        isLoggedIn={!!currentUser}
        onStartGame={() => setShowGame(true)}
        onLogout={handleLogout}
      />
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
          onLogout={handleLogout}
        />
        <button onClick={handleSave}>Save your progress</button>
      </>
    );
  } else if (levelState === 2) {
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
          onLogout={handleLogout}
        />
        <button onClick={handleSave}>Save your progress</button>
      </>
    );
  } else if (levelState === 3) {
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
          onLogout={handleLogout}
        />
        <button onClick={handleSave}>Save your progress</button>
      </>
    );
  } else {
    return <Final />;
  }
}

export default App;
