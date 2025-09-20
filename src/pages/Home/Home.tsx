import { useState } from "react";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Regester";

interface HomeProps {
  isLoggedIn: boolean;
  onStartGame: () => void;
  onLogout: () => void;
}

const Home = ({ isLoggedIn, onStartGame, onLogout }: HomeProps) => {
  // States to match App.tsx (for demo/info only, not used for auth here)
  const [points] = useState(0);
  const [levelState] = useState(1);
  const [num] = useState(1);
  const [pointsPs] = useState(0);
  const [authMode, setAuthMode] = useState<null | "login" | "register">(null);

  // Organize rendering logic for clarity
  let content;
  if (!isLoggedIn && authMode) {
    // Show login or register form, no game stats
    content = (
      <div className="w-full max-w-md flex flex-col items-center mb-10">
        <div className="w-full mb-4">
          {authMode === "login" ? <LoginPage /> : <RegisterPage />}
        </div>
        <button
          className="mt-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
          onClick={() => setAuthMode(null)}
        >
          Back to Home
        </button>
      </div>
    );
  } else if (!isLoggedIn && !authMode) {
    // Show login/register buttons, show game info and stats
    content = (
      <>
        <div className="flex gap-8 mb-10">
          <button
            className="bg-blue-600 text-white font-bold py-3 px-10 rounded-xl shadow-xl text-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={() => setAuthMode("login")}
          >
            Login
          </button>
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-10 rounded-xl shadow-xl text-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
            onClick={() => setAuthMode("register")}
          >
            Register
          </button>
        </div>
        <div className="bg-white/95 rounded-2xl shadow p-8 w-full max-w-md mb-4 border border-gray-200 mt-2">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 text-center">
            Game Stats (Demo)
          </h2>
          <ul className="text-gray-700 grid grid-cols-2 gap-x-6 gap-y-2 text-lg">
            <li>Points:</li>
            <li className="font-mono text-right">{points}</li>
            <li>Level:</li>
            <li className="font-mono text-right">{levelState}</li>
            <li>Number:</li>
            <li className="font-mono text-right">{num}</li>
            <li>Points/sec:</li>
            <li className="font-mono text-right">{pointsPs}</li>
          </ul>
        </div>
      </>
    );
  } else if (isLoggedIn) {
    // Show start game and logout buttons, no game stats
    content = (
      <div className="flex flex-col items-center gap-6 mb-10">
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-12 rounded-xl shadow-xl text-2xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
          onClick={onStartGame}
        >
          Start Game
        </button>
        <button
          className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-2 px-8 rounded-lg shadow text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-4 h-screen">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-200 backdrop-blur-md">
        <h1 className="text-6xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-xl tracking-tight font-sans">
          Idle Clicker Game
        </h1>
        <p className="mb-10 text-xl text-center max-w-2xl text-gray-700 leading-relaxed">
          Welcome to the{" "}
          <span className="text-blue-600 font-bold">Idle Clicker Game</span>!
          <br />
          Earn points by clicking, level up, and unlock new features.
          <br />
          <span className="text-green-600 font-semibold">
            Your progress is saved to your account.
          </span>
          <br />
          Compete for the highest level and points per second!
        </p>
        {content}
      </div>
    </main>
  );
};

export default Home;
