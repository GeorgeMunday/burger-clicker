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
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-[#f5ecd7] border border-[#e7dbc3] rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#7c5c36]">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-5 w-full">
          <div>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#a6895b] bg-[#fffaf3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a6895b] text-lg text-[#7c5c36]"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-[#a6895b] bg-[#fffaf3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a6895b] text-lg text-[#7c5c36]"
            />
          </div>
          {error && (
            <p className="text-red-500 text-base text-center font-semibold">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7c5c36] hover:bg-[#a6895b] text-[#f5ecd7] font-bold py-3 rounded-xl shadow-xl text-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#e7dbc3]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
