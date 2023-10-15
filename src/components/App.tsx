import { useState, useEffect } from "react";
import Simulation from "./Simulation";
import InputForm from "./InputForm";
import Data from "./Data";
import StartStop from "./StartStop";

export default function App() {
  const [started, setStarted] = useState(false);
  const [s0X, setS0X] = useState<number | null>(null);
  const [s0Y, setS0Y] = useState<number | null>(null);
  const [v0, setV0] = useState<number | null>(null);
  const [angle, setAngle] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Add an event listener to update the window width state
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define the minimum width at which the message should appear
  const minWindowWidth = 1100;

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
      {windowWidth < minWindowWidth ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-center max-w-[90vw]">
            This app is unusable on small screens
          </p>
        </div>
      ) : (
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
      )}
    </>
  );
}
