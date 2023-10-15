import React from "react";
import { StatsProps } from "../types";

export default function Stats({ x, y, vX, vY }: StatsProps) {
  return (
    <>
      <span>X: {x.toFixed(3)}m</span>
      <br></br>
      <span>Y: {y.toFixed(3)}m</span>
      <br></br>
      <span>vX: {vX.toFixed(3)}m/s</span>
      <br></br>
      <span>vY: {vY.toFixed(3)}m/s</span>
    </>
  );
}
