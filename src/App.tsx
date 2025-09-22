import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User, signOut } from "firebase/auth";
import { app, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Home from "./pages/Home/Home";
import Final from "./components/Banners/Final";
import SaveProgressButton from "./components/Buttons/SaveProgressButton";

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

  // Centering style
  const centeredClass = "flex justify-center items-center h-screen bg-beige";

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

  // Handle logout
  const handleLogout = async () => {
    await signOut(auth);
    console.log("Logged out");
  };

  if (!currentUser || !showGame) {
    return (
      <div className={centeredClass}>
        <Home
          isLoggedIn={!!currentUser}
          onStartGame={() => setShowGame(true)}
          onLogout={handleLogout}
        />
      </div>
    );
  }

  if (levelState === 1) {
    return (
      <div className={centeredClass}>
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
        <SaveProgressButton
          currentUser={currentUser}
          points={points}
          levelState={levelState}
          num={num}
          pointsPs={pointsPs}
        />
      </div>
    );
  } else if (levelState === 2) {
    return (
      <div className={centeredClass}>
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
        <SaveProgressButton
          currentUser={currentUser}
          points={points}
          levelState={levelState}
          num={num}
          pointsPs={pointsPs}
        />
      </div>
    );
  } else if (levelState === 3) {
    return (
      <div className={centeredClass}>
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
        <SaveProgressButton
          currentUser={currentUser}
          points={points}
          levelState={levelState}
          num={num}
          pointsPs={pointsPs}
        />
      </div>
    );
  } else if (levelState === 4) {
    return (
      <div className={centeredClass}>
        <Final onLogout={handleLogout} />
      </div>
    );
  }
}

export default App;
