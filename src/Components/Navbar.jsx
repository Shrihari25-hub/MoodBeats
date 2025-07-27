import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center bg-[#181818] shadow-md px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center gap-2 z-50">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
            src="/MoodBeats (1).png"
            alt="MoodBeats Logo"
          />
          <p className="font-extrabold font-nunito text-[#f1f1f1] text-lg md:text-xl">
            MoodBeats
          </p>
        </Link>
      </div>

      <button
        className="md:hidden text-[#aaa] hover:text-[#f1f1f1] transition-colors z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        }  md:flex flex-col md:flex-row w-full md:w-auto items-center gap-6 absolute md:static top-16 left-0 bg-[#181818] md:bg-transparent p-4 md:p-0 md:pr-7 gap-8 z-40`}
      >
        <Link
          to="/"
          className="text-[#aaa] hover:text-[#f1f1f1] transition-colors duration-200 text-lg md:text-base"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/favourite"
          className="text-[#aaa] hover:text-[#f1f1f1] transition-colors duration-200 text-lg md:text-base"
          onClick={() => setIsMenuOpen(false)}
        >
          Favourites
        </Link>
      </div>
    </nav>
  );
}

export { Navbar };