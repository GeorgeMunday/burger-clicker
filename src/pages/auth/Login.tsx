import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/firebase";

const LoginPage = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-[#f5ecd7] border border-[#e7dbc3] rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center text-[#7c5c36]">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-3 w-full">
          <div>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#a6895b] bg-[#fffaf3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6895b] text-base text-[#7c5c36]"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#a6895b] bg-[#fffaf3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6895b] text-base text-[#7c5c36]"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center font-semibold">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7c5c36] hover:bg-[#a6895b] text-[#f5ecd7] font-bold py-2 rounded-lg shadow text-base transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#e7dbc3]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
