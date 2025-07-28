import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Navbar } from "./Components/Navbar";
import { Favourite } from "./Pages/Favourite";
import { MoodPage } from "./Pages/MoodPage";
import OfflineOverlay from "./Components/OfflineOverlay";
import MoodDetector from "./Components/MoodDetector";
import GoogleAnalytics from "./GoogleAnalytics";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
    <GoogleAnalytics/>
    <div className="min-h-screen bg-[#0f0f0f] text-white relative">
      <Navbar />

      {!isOnline ? (
        <OfflineOverlay />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/detect" element={<MoodDetector/>} />
          <Route path="/mood/:mood" element={<MoodPage />} />
        </Routes>
      )}
    </div>
    </>
  );
}

export default App;
