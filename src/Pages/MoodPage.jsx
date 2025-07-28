import { Link, useParams } from "react-router-dom";
import { songsByMood } from "../data/Songs.js";
import LiteYouTubeEmbed from "../Components/LiteYoutubeEmbed";
import { useInView } from "react-intersection-observer";
import { useFavorites } from "../context/FavoritesContext"; 
import { Heart } from "lucide-react";

function MoodPage() {
  const { mood } = useParams();
  const moodKey = mood.toLowerCase();
  const songs = songsByMood[moodKey] || [];

  return (
    <div className="px-6 py-10 min-h-screen bg-[#0f0f0f] text-white">
      <div className="flex items-center mb-2">
        <Link className="text-white mr-4" to={"/"}>
          ←
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">
        Your <span className="capitalize">{mood}</span> Playlist
      </h1>

      {songs.length === 0 ? (
        <p className="text-gray-400">No songs available for this mood.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song) => (
            <LazySongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}

function LazySongCard({ song }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, 
  });
const { isFavorite, addFavorite, removeFavorite } = useFavorites();

const handleToggle = () => {
  isFavorite(song.id) ? removeFavorite(song.id) : addFavorite(song);
};


  return (
    <div
      ref={ref}
      className="relative bg-[#1c1c1c] rounded-lg p-4 shadow-md flex flex-col gap-4"
    >
      {inView ? (
        <LiteYouTubeEmbed embedId={song.embedId} title={song.title} />
      ) : (
        <div className="w-full h-0 pb-[56.25%] bg-gray-800 animate-pulse rounded-lg" />
      )}

       <button
  className="absolute bottom-4 right-4 text-white hover:scale-110 transition z-10"
  onClick={handleToggle}
  aria-label="Toggle Favorite"
>
  <Heart
    className={`w-6 h-6 transition-transform duration-300 ${
      isFavorite(song.id) ? "text-red-500 fill-red-500 scale-110" : "text-gray-400"
    }`}
  />
</button>

      <div>
        <h2 className="text-lg font-semibold">{song.title}</h2>
        <p className="text-sm text-gray-400">{song.artist}</p>
        <p className="text-sm text-gray-500">
          {song.genre} • {song.duration}
        </p>
      </div>
    </div>
  );
}

export { MoodPage };
