import React from "react";

type LogoutButtonProps = {
  onLogout: () => void;
  className?: string;
};

const Logout: React.FC<LogoutButtonProps> = ({ onLogout, className = "" }) => {
  return (
    <button
      className={`absolute top-4 right-4 bg-[#7c5c36] text-[#f5ecd7] font-bold py-2 px-6 rounded-lg shadow text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#e7dbc3] border border-[#a6895b] ${className}`}
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
