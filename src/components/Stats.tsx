import { StatsProps } from "../types";

export default function Stats({ x, y, vX, vY, nearness }: StatsProps) {
  return (
    <>
      <span>X: {(x / nearness).toFixed(3)}m</span>
      <br></br>
      <span>Y: {(y / nearness).toFixed(3)}m</span>
      <br></br>
      <span>vX: {vX.toFixed(3)}m/s</span>
      <br></br>
      <span>vY: {vY.toFixed(3)}m/s</span>
    </>
  );
}
