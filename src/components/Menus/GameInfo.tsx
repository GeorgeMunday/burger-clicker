const GameInfo = () => {
  return (
    <div className="">
      <h1 className="text-6xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-xl tracking-tight font-sans">
        Idle Clicker Game
      </h1>
      <p className="mb-10 text-xl text-center max-w-2xl text-white leading-relaxed">
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
    </div>
  );
};

export default GameInfo;
