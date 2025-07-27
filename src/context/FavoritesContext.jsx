import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {

    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (song) => {
    setFavorites((prev) =>
      prev.some((s) => s.id === song.id) ? prev : [...prev, song]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavorite = (id) => {
    return favorites.some((s) => s.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
