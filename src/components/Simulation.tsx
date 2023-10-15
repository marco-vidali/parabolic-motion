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
  const v0X = v0 * Math.cos(fixedAngle);
  const v0Y = v0 * Math.sin(fixedAngle);
  let animationFrameId: number;
  const start = new Date().getTime();

  const [x, setX] = useState(s0X);
  const [y, setY] = useState(s0Y);
  const [vX, setVX] = useState(v0X);
  const [vY, setVY] = useState(v0Y);

  const updatePosition = () => {
    const now = new Date().getTime();
    const t = (now - start) / 1000;
    const newX = s0X + v0X * t;
    const newY = -(g * Math.pow(t, 2)) / 2 + v0Y * t + s0Y;
    const newVY = -(9.81 * t) + v0Y;

    if (newY <= 0) {
      cancelAnimationFrame(animationFrameId);
      setY(0);
      setVX(0);
      setVY(0);
    } else {
      setX(newX);
      setY(newY);
      setVY(newVY);
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
        <span>X: {x.toFixed(3)}m</span>
        <br></br>
        <span>Y: {y.toFixed(3)}m</span>
        <br></br>
        <span>vX: {vX.toFixed(3)}m/s</span>
        <br></br>
        <span>vY: {vY.toFixed(3)}m/s</span>
      </div>
      <div
        className="w-8 h-8 rounded-full absolute bg-primary"
        style={{
          left: x,
          bottom: y,
        }}
      />
    </>
  );
}
