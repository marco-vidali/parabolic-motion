import { useEffect, useState } from "react";

export default function Simulation({
  s0X,
  s0Y,
  v0,
  angle,
}: {
  s0X: number;
  s0Y: number;
  v0: number;
  angle: number;
}) {
  const fixedAngle = (angle * Math.PI) / 180;
  const g = 9.807;

  const [x, setX] = useState(s0X);
  const [y, setY] = useState(s0Y);
  const v0X = v0 * Math.cos(fixedAngle);
  const v0Y = v0 * Math.sin(fixedAngle);

  let animationFrameId: number;
  const start = new Date().getTime();

  const updatePosition = () => {
    const now = new Date().getTime();
    const t = (now - start) / 1000;
    const newX = s0X + v0X * t;
    const newY = -(g * Math.pow(t, 2)) / 2 + v0Y * t + s0Y;

    if (newY <= 0) {
      cancelAnimationFrame(animationFrameId);
    } else {
      setX(newX);
      setY(newY);
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
    <div
      className="w-8 h-8 bg-primary rounded-full absolute"
      style={{ left: x, bottom: y }}
    />
  );
}
