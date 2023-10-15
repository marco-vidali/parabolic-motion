export default function Data({ children }: { children: JSX.Element[] }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex gap-4 2xl:flex-row flex-col">{children}</div>
    </div>
  );
}
