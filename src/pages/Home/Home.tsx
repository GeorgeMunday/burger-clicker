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
  "font-bold py-3 px-10 rounded-xl shadow-lg text-xl transition-all hover:scale-105 focus:outline-none w-48";

const loginButton = `${buttonBase} bg-[#7c5c36] hover:bg-[#a6895b] text-[#f5ecd7] focus:ring-4 focus:ring-[#e7dbc3]`;
const registerButton = `${buttonBase} bg-[#a6895b] hover:bg-[#7c5c36] text-[#f5ecd7] focus:ring-4 focus:ring-[#e7dbc3]`;
const startButton = `${buttonBase} text-2xl px-12 bg-[#7c5c36] hover:bg-[#a6895b] text-[#f5ecd7] focus:ring-4 focus:ring-[#e7dbc3]`;
const logoutButton = `${buttonBase} text-2xl px-12 bg-[#a6895b] hover:bg-[#7c5c36] text-[#f5ecd7] focus:ring-4 focus:ring-[#e7dbc3]`;
const backButton =
  "mt-2 px-5 py-2 bg-[#e7dbc3] hover:bg-[#d6c7a1] text-[#7c5c36] rounded-lg font-medium transition-all border border-[#a6895b]";

const Home = ({ isLoggedIn, onStartGame, onLogout }: HomeProps) => {
  const [authMode, setAuthMode] = useState<null | "login" | "register">(null);

  let content;

  if (!isLoggedIn && authMode) {
    content = (
      <div className="w-full max-w-md flex flex-col items-center mb-10">
        <div className="w-full mb-4">
          {authMode === "login" ? <LoginPage /> : <RegisterPage />}
        </div>
        <button
          className={backButton + " mb-4"}
          onClick={() => setAuthMode(null)}
        >
          ← Back to Home
        </button>
      </div>
    );
  } else if (!isLoggedIn && !authMode) {
    content = (
      <div className="flex flex-col items-center gap-4 mb-4">
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
      <div className="flex flex-col items-center gap-6 w-full mt-2">
        <div className="flex gap-8 mb-2">
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
    <main className="flex-1 flex flex-col items-center justify-center min-h-screen bg-[#f5ecd7] text-[#7c5c36] p-4">
      <div className="w-[90vw] h-[90vh] max-w-4xl max-h-[900px] rounded-3xl bg-[#e7dbc3] shadow-2xl p-6 sm:p-10 flex flex-col border border-[#7c5c36] overflow-auto">
        <div className="flex flex-col items-center justify-between min-h-full w-full gap-8">
          <GameInfo />
          <div className="flex flex-col items-center w-full my-4">
            <div className="flex items-center w-full max-w-md mx-auto my-6">
              <div className="flex-grow border-t-2 border-[#a6895b]" />
              <span className="mx-4 text-[#a6895b] font-semibold text-lg select-none">
                Get Started
              </span>
              <div className="flex-grow border-t-2 border-[#a6895b]" />
            </div>
          </div>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Home;
