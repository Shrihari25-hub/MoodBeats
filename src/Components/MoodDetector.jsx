import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const MoodDetector = () => {
  const videoRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const loadModels = async () => {
    const MODEL_URL = "/models"; 
    await faceapi.nets.tinyFaceDetector.loadFromUri(
      "/models/tiny_face_detector"
    );
    await faceapi.nets.faceExpressionNet.loadFromUri(
      "/models/face_expression_model"
    );
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Camera access denied", err));
  };

  useEffect(() => {
    loadModels().then(() => {
      startVideo();
      setLoading(false);
    });
  }, []);

  const detectMood = async () => {
    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections && detections.expressions) {
      const expressions = detections.expressions;
      const mood = getDominantMood(expressions);

      if (mood) {
        const moodMap = {
          happy: "happy",
          sad: "melancholy",
          neutral: "chill",
          angry: "energetic",
          fearful: "melancholy",
          disgusted: "melancholy",
          surprised: "energetic",
        };

        const mappedMood = moodMap[mood];
        if (mappedMood) {
          navigate(`/mood/${mappedMood}`);
        }
      }
    }
  };

  const getDominantMood = (expressions) => {
    return Object.entries(expressions).reduce((max, curr) =>
      curr[1] > max[1] ? curr : max
    )[0];
  };

  return (
    <div className="text-center p-4 text-white">
        <div className="flex items-center mb-2">
        <Link className="text-white mr-4" to={"/"}>
          ←
        </Link>
      </div>
      <h2 className="text-xl font-bold mb-4">Detect Your Mood</h2>
      <div className="flex flex-col items-center justify-center mt-4">
  {loading && (
    <>
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-2 text-white">Loading models...</p>
    </>
  )}
</div>

      <video
        ref={videoRef}
        autoPlay
        muted
        className="mx-auto rounded-lg shadow-lg w-80"
        onPlay={() => {
          setInterval(() => detectMood(), 3000);
        }}
      />
    </div>
  );
};

export default MoodDetector;
