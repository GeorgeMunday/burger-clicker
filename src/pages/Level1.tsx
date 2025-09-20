import Heading from "../components/Banners/Heading";
import EarnPoints from "../components/Buttons/EarnPoints";
import OpenMenu from "../components/Buttons/OpenMenu";
import NewLevelCountDown from "../components/Counters/NewLevelCountDown";
import Points from "../components/Counters/Points";
import PointsPerSecond from "../components/Counters/PointsPerSecond";
import NextLevels from "../components/Navigators/NextLevels";
import { EarnPointsProps } from "../types/GameState";

const Level1 = ({
  points,
  setPoints,
  levelCap,
  onNextLevel,
  canGoNext,
  num,
  setNum,
  setPointsPS,
  pointsPS,
  onLogout,
}: EarnPointsProps & { onLogout: () => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <button
        className="absolute top-4 right-4 bg-red  text-white font-bold py-2 px-6 rounded-lg shadow text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
        onClick={onLogout}
      >
        Logout
      </button>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-200 backdrop-blur-md">
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-xl tracking-tight font-sans">
            Level 1
          </h2>
          {/* Progress Bar and Level Info */}
          <div className="w-full mb-8">
            <NewLevelCountDown
              levelCap={levelCap}
              points={points}
              num={num}
              setNum={setNum}
              setPoints={setPoints}
              pointsPS={pointsPS}
              setPointsPS={setPointsPS}
            />
          </div>
          {/* Points Display */}
          <div className="mb-8 w-full flex flex-col items-center">
            <Points
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
          {/* Click Button */}
          <div className="mb-8 w-full flex flex-col items-center">
            <EarnPoints
              num={num}
              points={points}
              setPoints={setPoints}
              setNum={setNum}
              pointsPS={pointsPS}
              setPointsPS={setPointsPS}
              levelCap={levelCap}
              onNextLevel={onNextLevel}
              canGoNext={canGoNext}
            />
          </div>
          {/* Next Level Button */}
          <div className="mb-8 w-full flex flex-col items-center">
            <NextLevels canGoNext={!!canGoNext} onNextLevel={onNextLevel!} />
          </div>
          {/* Buy Menu */}
          <div className="mb-8 w-full flex flex-col items-center">
            <OpenMenu
              pointsPS={pointsPS}
              setPoints={setPoints}
              setPointsPS={setPointsPS}
              points={points}
              num={num}
              setNum={setNum}
              levelCap={levelCap}
              onNextLevel={onNextLevel}
              canGoNext={canGoNext}
            />
          </div>
          {/* Points Per Second Logic (no UI) */}
          <PointsPerSecond
            pointsPS={pointsPS}
            setPoints={setPoints}
            setPointsPS={setPointsPS}
            points={points}
            num={num}
            setNum={setNum}
            levelCap={levelCap}
            onNextLevel={onNextLevel}
            canGoNext={canGoNext}
          />
        </div>
      </main>
    </div>
  );
};

export default Level1;
