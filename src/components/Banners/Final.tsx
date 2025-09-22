import Logout from "../Buttons/Logout";

const Final = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <main className="flex justify-center items-center h-screen bg-[#f5ecd7] text-[#7c5c36] p-4">
      <div className="w-[90vw] h-[80vh] max-w-2xl max-h-[600px] rounded-3xl bg-[#e7dbc3] shadow-2xl p-10 flex flex-col items-center justify-center border border-[#7c5c36]">
        <h1 className="text-4xl font-bold mb-6 text-[#7c5c36]">
          Congratulations!
        </h1>
        <p className="text-2xl mb-8 text-center">
          You completed all levels of the Burger Clicker Game.
          <br />
          Thank you for playing!
        </p>
        <Logout onLogout={onLogout} />
      </div>
    </main>
  );
};

export default Final;
