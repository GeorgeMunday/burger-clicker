import { useState } from "react";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";

const levelCaps = [10, 25];

function App() {
  const [points, setPoints] = useState(0); // how many points you have
  const [levelState, setLevelState] = useState(1); // what level you are on
  const [num, setNum] = useState(1); // number added per click
  const [pointsPs, setPointsPs] = useState(1); // points per second

  const handleNextLevel = () => {
    setLevelState((prev) => prev + 1);
    setPoints(0);
  };

  if (levelState === 1)
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
      </>
    );
  if (levelState === 2)
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
      </>
    );
}

export default App;
