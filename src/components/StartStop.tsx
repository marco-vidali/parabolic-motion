import { StartStopProps } from "../types";

export default function StartStop({
  started,
  onToggleStarted,
}: StartStopProps) {
  return (
    <button
      className="btn btn-primary absolute bottom-4 right-4 w-32"
      onClick={onToggleStarted}
    >
      {started ? "Stop" : "Start"}
    </button>
  );
}
