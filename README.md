# MoodBeats – AI-Powered Music Recommendation Web App

MoodBeats is a web app that suggests songs based on your mood — detected in real-time using facial expressions via your webcam or chosen manually. Users can listen to songs, view mood-based playlists, and save their favorites — all in a clean, responsive UI.

---

## Features
-  Detect mood in real-time using webcam + face-api.js
-  Manual mood selection option (Happy, Sad, Angry, Neutral)
-  Playlist of 48 handpicked songs categorized by mood
-  Dynamic song cards with image, title, artist, and play button
-  Favorite songs saved using `localStorage`
-  Fully responsive design (mobile/tablet/desktop)

---

## Tech Stack

- React.js
- Tailwind CSS
- face-api.js
- Vite
- YouTube Embed

---

## How It Works

- The app uses `face-api.js` to detect expressions like "happy", "sad", "angry", and "neutral" from your live webcam feed.
- Based on the detected mood, a relevant playlist is shown.
- Users can also manually choose a mood if webcam access is denied.
- Songs are rendered with thumbnails, titles, and play buttons using YouTube embed links.

---

## Getting Started (Run Locally)

```bash
git clone https://github.com/Shrihari25-hub/MoodBeats.git
cd moodbeats
npm install
npm run dev
