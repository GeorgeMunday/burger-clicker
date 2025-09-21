import { useState } from "react";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Regester";
import GameInfo from "../../components/Menus/GameInfo";

interface HomeProps {
  isLoggedIn: boolean;
  onStartGame: () => void;
  onLogout: () => void;
}

const Home = ({ isLoggedIn, onStartGame, onLogout }: HomeProps) => {
  const [authMode, setAuthMode] = useState<null | "login" | "register">(null);
  let content;

  if (!isLoggedIn && authMode) {
    // shows forms depending on
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
    // home page
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
      </>
    );
  } else if (isLoggedIn) {
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
        <GameInfo />
        {content}
      </div>
    </main>
  );
};

export default Home;
