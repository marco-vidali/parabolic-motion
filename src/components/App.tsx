import { useState } from "react";
import Data from "./Data";
import Simulation from "./Simulation";
import StartStop from "./StartStop";

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
      if (s0X === null || s0Y === null || v0 === null || angle === null) return;
      setStarted(true);
    }
  }

  function handleSetS0X(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    if (value === "") {
      setS0X(null);
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setS0X(numericValue);
      }
    }
  }

  function handleSetS0Y(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    if (value === "") {
      setS0Y(null);
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setS0Y(numericValue);
      }
    }
  }

  function handleSetV0(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    if (value === "") {
      setV0(null);
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setV0(numericValue);
      }
    }
  }

  function handleSetAngle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();
    if (value === "") {
      setAngle(null);
    } else {
      const numericValue = Number(value);
      if (!isNaN(numericValue)) {
        setAngle(numericValue);
      }
    }
  }

  return (
    <>
      {started ? (
        <Simulation s0X={s0X!} s0Y={s0Y!} v0={v0!} angle={angle!} />
      ) : (
        <Data>
          <input
            type="text"
            placeholder="Initial X position (m)"
            className="input input-bordered w-64"
            value={s0X !== null ? s0X : ""}
            onChange={handleSetS0X}
          />
          <input
            type="text"
            placeholder="Initial Y position (m)"
            className="input input-bordered w-64"
            value={s0Y !== null ? s0Y : ""}
            onChange={handleSetS0Y}
          />
          <input
            type="text"
            placeholder="Initial velocity module (m/s)"
            className="input input-bordered w-64"
            value={v0 !== null ? v0 : ""}
            onChange={handleSetV0}
          />
          <input
            type="text"
            placeholder="Initial velocity angle"
            className="input input-bordered w-64"
            value={angle !== null ? angle : ""}
            onChange={handleSetAngle}
          />
        </Data>
      )}
      <StartStop started={started} onToggleStarted={handleStarted} />
    </>
  );
}

export default App;
