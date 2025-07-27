import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
  const [currentEmbedId, setCurrentEmbedId] = useState(null);

  return (
    <PlayerContext.Provider value={{ currentEmbedId, setCurrentEmbedId }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  return useContext(PlayerContext);
}
