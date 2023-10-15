import { useEffect, useState } from "react";
import { SimulationProps } from "../types";
import Stats from "./Stats";

export default function Simulation({
  s0X,
  s0Y,
  v0,
  angle,
  nearness,
}: SimulationProps) {
  const fixedAngle = (angle * Math.PI) / 180;
  const g = 9.807;
  const v0X = v0 * Math.cos(fixedAngle);
  const v0Y = v0 * Math.sin(fixedAngle);
  let animationFrameId: number;
  const start = new Date().getTime();

  const [x, setX] = useState(s0X);
  const [y, setY] = useState(s0Y);
  const [vX, setVx] = useState(v0X);
  const [vY, setVy] = useState(v0Y);

  const updatePosition = () => {
    const now = new Date().getTime();
    const t = (now - start) / 1000;
    const newX = (s0X + v0X * t) * nearness;
    const newY = (-(g * Math.pow(t, 2)) / 2 + v0Y * t + (s0Y || 0)) * nearness;
    const newVy = -(9.81 * t) + v0Y;

    if (newY <= 0) {
      cancelAnimationFrame(animationFrameId);
      setY(0);
      setVx(0);
      setVy(0);
    } else {
      setX(newX);
      setY(newY);
      setVy(newVy);
    }

    animationFrameId = requestAnimationFrame(updatePosition);
  };

  useEffect(() => {
    updatePosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="absolute top-4 left-4 text-base-content">
        <Stats x={x} y={y} vX={vX} vY={vY} nearness={nearness} />
      </div>
      <div
        className="w-8 h-8 rounded-full absolute bg-primary"
        style={{
          left: x,
          bottom: y || 0,
        }}
      />
    </>
  );
}
