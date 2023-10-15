import { useState } from "react";
import Data from "./components/Data";

function App() {
  const [started, setStarted] = useState(false);
  const [s0X, setS0X] = useState<null | number>(null);
  const [s0Y, setS0Y] = useState<null | number>(null);
  const [v0, setV0] = useState<null | number>(null);
  const [angle, setAngle] = useState<null | number>(null);

  function handleStarted() {
    if (started) {
      setStarted(false);

      setS0X(null);
      setS0Y(null);
      setV0(null);
      setAngle(null);
    } else {
      if (!s0X || !s0Y || !v0 || !angle) return;
      setStarted(true);
    }
  }

  function handleSetS0X(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (!isNaN(value) || value === null) setS0X(value);
  }

  function handleSetS0Y(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (!isNaN(value) || value === null) setS0Y(value);
  }

  function handleSetV0(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (!isNaN(value) || value === null) setV0(value);
  }

  function handleSetAngle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (!isNaN(value) || value === null) setAngle(value);
  }

  return (
    <>
      {started ? (
        "Started"
      ) : (
        <Data>
          <input
            type="text"
            placeholder="Initial X position (m)"
            className="input input-bordered w-64"
            value={s0X ? s0X : ""}
            onChange={handleSetS0X}
          />
          <input
            type="text"
            placeholder="Initial Y position (m)"
            className="input input-bordered w-64"
            value={s0Y ? s0Y : ""}
            onChange={handleSetS0Y}
          />
          <input
            type="text"
            placeholder="Initial velocity module (m/s)"
            className="input input-bordered w-64"
            value={v0 ? v0 : ""}
            onChange={handleSetV0}
          />
          <input
            type="text"
            placeholder="Initial velocity angle"
            className="input input-bordered w-64"
            value={angle ? angle : ""}
            onChange={handleSetAngle}
          />
        </Data>
      )}

      <button
        className="btn btn-primary absolute bottom-4 right-4 w-32"
        onClick={handleStarted}
      >
        {started ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default App;
