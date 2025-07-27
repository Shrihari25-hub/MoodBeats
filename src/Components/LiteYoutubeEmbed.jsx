import { useState, useEffect, useRef } from "react";
import { usePlayer } from "../context/PlayerContext";

function LiteYouTubeEmbed({ embedId, title }) {
  const iframeRef = useRef(null);
  const { currentEmbedId, setCurrentEmbedId } = usePlayer();
  const [wasClicked, setWasClicked] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const isIframeLoaded = wasClicked && currentEmbedId === embedId;

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement;

      const isSmallScreen = window.innerWidth <= 768;

      if (isSmallScreen && isFullscreen && iframeRef.current) {
        document.exitFullscreen?.();
        window.open(`https://www.youtube.com/watch?v=${embedId}`, "_blank");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [embedId]);

  const thumbnail = `https://i.ytimg.com/vi/${embedId}/hqdefault.jpg`;

  const handlePlay = () => {
    setCurrentEmbedId(embedId);
    setWasClicked(true);
    setIframeLoaded(false);
  };

  return (
    <div
      className="relative w-full h-0 pb-[56.25%] bg-black cursor-pointer rounded-xl overflow-hidden shadow-lg"
      onClick={handlePlay}
    >
      {!isIframeLoaded ? (
        <>
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-white opacity-90"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </>
      ) : (
        <>
          {!iframeLoaded && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 animate-pulse z-10" />
          )}
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full z-20"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            title={title}
            frameBorder="0"
            onLoad={() => setIframeLoaded(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </>
      )}
    </div>
  );
}

export default LiteYouTubeEmbed;
