const GameInfo = () => {
  return (
    <div className="bg-[#f5ecd7] rounded-2xl shadow p-8 w-full max-w-2xl mx-auto mt-8 border border-[#e7dbc3]">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-[#7c5c36] tracking-tight font-sans">
        Burger Clicker Game
      </h1>
      <p className="mb-8 text-lg text-center text-[#7c5c36] leading-relaxed">
        Welcome to the{" "}
        <span className="text-[#a6895b] font-bold">Burger Clicker Game</span>!
        <br />
        Earn points by{" "}
        <span className="font-semibold text-[#4b3a1a]">
          clicking the burger
        </span>{" "}
        in the center of the screen.
        <br />
        Level up, unlock new features, and increase your points per second.
        <br />
        <span className="text-[#4b3a1a] font-semibold">
          Your progress is saved to your account.
        </span>
        <br />
        Compete for the highest level and points per second!
      </p>
      <div className="flex justify-center">
        <img src="/burger.png" alt="Burger Clicker" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default GameInfo;
