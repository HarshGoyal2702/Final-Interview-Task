import { useEffect, useRef, useState } from "react";

export default function CameraFeed() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setStatus("Camera active");
    } catch (err) {
      setStatus("Camera access denied or unavailable");
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h2>📷 Camera Feed</h2>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="100%"
      ></video>

      <p className="status">{status}</p>
    </div>
  );
}