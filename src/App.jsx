import CameraFeed from "./components/CameraFeed";
import VoiceRecognition from "./components/VoiceRecognition";
import BluetoothScanner from "./components/BluetoothScanner";

function App() {
  return (
    <div className="container">
      <h1>Zenithra Hardware Interface</h1>

      <div className="grid">
        <CameraFeed />
        <VoiceRecognition />
        <BluetoothScanner />
      </div>
    </div>
  );
}

export default App;