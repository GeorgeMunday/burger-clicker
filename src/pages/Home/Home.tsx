import { useState } from "react";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Regester";
import GameInfo from "../../components/Menus/GameInfo";
import GameStats from "../../components/Banners/GameStats";

interface HomeProps {
  isLoggedIn: boolean;
  onStartGame: () => void;
  onLogout: () => void;
}

// 💡 Reusable Tailwind class variables
const buttonBase =
  "font-bold py-3 px-10 rounded-xl shadow-lg text-xl transition-all transform hover:scale-105 focus:outline-none";

const loginButton = `${buttonBase} bg-blue-600 hover:bg-blue-700 text-white focus:ring-4 focus:ring-blue-300`;
const registerButton = `${buttonBase} bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white focus:ring-4 focus:ring-green-300`;
const startButton = `${buttonBase} text-2xl px-12 bg-blue-700 hover:bg-blue-800 text-white focus:ring-4 focus:ring-blue-400`;
const logoutButton = `${buttonBase} text-2xl px-12 bg-red-600 hover:bg-red-700 text-white focus:ring-4 focus:ring-red-300`;
const backButton =
  "mt-2 px-5 py-2 bg-slate-300 hover:bg-slate-400 text-gray-800 rounded-lg font-medium transition-all";

const Home = ({ isLoggedIn, onStartGame, onLogout }: HomeProps) => {
  const [authMode, setAuthMode] = useState<null | "login" | "register">(null);

  let content;

  if (!isLoggedIn && authMode) {
    content = (
      <div className="w-full max-w-md flex flex-col items-center mb-10">
        <div className="w-full mb-4">
          {authMode === "login" ? <LoginPage /> : <RegisterPage />}
        </div>
        <button className={backButton} onClick={() => setAuthMode(null)}>
          ← Back to Home
        </button>
      </div>
    );
  } else if (!isLoggedIn && !authMode) {
    content = (
      <div className="flex flex-col items-center gap-6 mb-10">
        <div className="flex gap-6">
          <button className={loginButton} onClick={() => setAuthMode("login")}>
            Login
          </button>
          <button
            className={registerButton}
            onClick={() => setAuthMode("register")}
          >
            Register
          </button>
        </div>
      </div>
    );
  } else if (isLoggedIn) {
    content = (
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="flex gap-6">
          <button className={startButton} onClick={onStartGame}>
            Start Game
          </button>
          <button className={logoutButton} onClick={onLogout}>
            Logout
          </button>
        </div>
        <GameStats />
      </div>
    );
  }
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 text-white p-4">
      <div className="w-[90vw] h-[90vh] max-w-6xl max-h-[900px] rounded-3xl bg-slate-700/60 shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col border border-blue-300 backdrop-blur-md overflow-auto">
        <div className="flex flex-col items-center justify-between min-h-full w-full gap-6">
          <GameInfo />
          {content}
        </div>
      </div>
    </main>
  );
};

export default Home;
