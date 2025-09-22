import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../../firebase/firebase";

const RegisterPage: React.FC = () => {
  const auth = getAuth(app);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // 1. Register user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // 2. Create Firestore document with game stats
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
        createdAt: new Date(),

        // initial game stats
        points: 0,
        level: 1,
        num: 1,
        pointsPs: 0,
      });

      console.log("✅ User registered and stored in Firestore:", user.uid);
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
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-3 w-full">
          <div>
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-[#a6895b] bg-[#fffaf3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a6895b] text-base text-[#7c5c36]"
            />
          </div>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
