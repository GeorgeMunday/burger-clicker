import { useState } from "react";
const GameStats = () => {
  const [points] = useState(0);
  const [levelState] = useState(1);
  const [num] = useState(1);
  const [pointsPs] = useState(0);
  return (
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
  );
};

export default GameStats;
