import { useState } from "react";

export default function BluetoothScanner() {
  const [deviceName, setDeviceName] = useState("");
  const [status, setStatus] = useState("No device connected");

  const scanBluetooth = async () => {
    if (!navigator.bluetooth) {
      setStatus("Bluetooth not supported in this browser");
      return;
    }

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });

      setDeviceName(device.name || "Unnamed Device");
      setStatus("Device Selected");
    } catch (error) {
      setStatus("Bluetooth request cancelled");
      console.error(error);
    }
  };

  return (
    <div className="card">
      <h2>🦷 Bluetooth Scanner</h2>

      <button onClick={scanBluetooth}>Scan Devices</button>

      <p className="status">{status}</p>

      {deviceName && <p>Device: {deviceName}</p>}
    </div>
  );
}