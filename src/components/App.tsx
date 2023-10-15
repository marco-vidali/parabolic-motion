import { useState } from "react";
import Data from "./Data";
import Simulation from "./Simulation";
import StartStop from "./StartStop";
import InputForm from "./InputForm";

export default function App() {
  const [started, setStarted] = useState(false);
  const [s0X, setS0X] = useState<number | null>(null);
  const [s0Y, setS0Y] = useState<number | null>(null);
  const [v0, setV0] = useState<number | null>(null);
  const [angle, setAngle] = useState<number | null>(null);

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

  return (
    <>
      {started ? (
        <Simulation s0X={s0X!} s0Y={s0Y!} v0={v0!} angle={angle!} />
      ) : (
        <Data>
          <InputForm
            placeholder="Initial X position (m)"
            value={s0X}
            onChange={setS0X}
          />
          <InputForm
            placeholder="Initial Y position (m)"
            value={s0Y}
            onChange={setS0Y}
          />
          <InputForm
            placeholder="Initial velocity module (m/s)"
            value={v0}
            onChange={setV0}
          />
          <InputForm
            placeholder="Initial velocity angle"
            value={angle}
            onChange={setAngle}
          />
        </Data>
      )}
      <StartStop started={started} onToggleStarted={handleStarted} />
    </>
  );
}
