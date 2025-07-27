import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start min-h-screen pt-12 md:pt-20 px-4 bg-gradient-to-b ">
        <h1 className="text-slate-100 font-serif font-bold text-4xl sm:text-5xl mb-2 tracking-wider text-center drop-shadow">
          Welcome to MoodBeats
        </h1>
        <p className="text-rose-300 font-light text-lg sm:text-xl font-sans mb-6 text-center max-w-md">
          Find the Perfect Beat for Every Mood
        </p>

        <div className="flex flex-col items-center mb-6 w-full max-w-sm pt-3 sm:pt-5">
          <Link to={"/detect"}>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-rose-500/30 text-base">
            Capture Your Mood
          </button>
          </Link>
        </div>

        <div className="relative w-full max-w-xs mb-6">
          <div className="absolute inset-0 flex items-center pt-2">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center pt-2">
            <span className="px-2 bg-gray-800 text-gray-400 text-sm">or</span>
          </div>
        </div>

        <div className="text-center w-full max-w-md px-2">
          <h3 className="text-slate-200 font-medium mb-4 text-xl sm:text-2xl">
            Select your mood:
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
            {[
              {
                mood: "Happy",
                emoji: "😊",
                color: "bg-yellow-400 hover:bg-yellow-500",
              },
              {
                mood: "Melancholy",
                emoji: "😔",
                color: "bg-blue-400 hover:bg-blue-500",
              },
              {
                mood: "Energetic",
                emoji: "⚡",
                color: "bg-green-400 hover:bg-green-500",
              },
              {
                mood: "Chill",
                emoji: "😌",
                color: "bg-purple-400 hover:bg-purple-500",
              },
            ].map((item) => (
              <Link to={`/mood/${item.mood.toLowerCase()}`} key={item.mood}>
                <button
                  className={`
                    ${item.color}
                    text-white
                    w-full
                    px-8 sm:px-8
                    py-3.5
                    rounded-full
                    font-semibold
                    transition-all
                    flex items-center justify-center space-x-2
                    shadow-md hover:scale-105 focus:outline-none
                    text-base sm:text-lg
                  `}
                >
                  <span className="text-lg sm:text-xl">{item.emoji}</span>
                  <span className="text-base sm:text-lg">{item.mood}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-xs sm:text-sm text-center max-w-xs mx-auto pt-12 sm:pt-20">
          "Music can change the world because it can change people." – Bono
        </p>
      </div>
    </>
  );
}
export { Home };
