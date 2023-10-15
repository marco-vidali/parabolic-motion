export type SimulationProps = {
  s0X: number;
  s0Y: number;
  v0: number;
  angle: number;
  nearness: number;
};

export type StatsProps = {
  x: number;
  y: number;
  vX: number;
  vY: number;
  nearness: number;
};

export type StartStopProps = {
  started: boolean;
  onToggleStarted: React.MouseEventHandler<HTMLButtonElement>;
};
