export default function GameBoard({ children }) {
  return (
    <>
      <div className="w-full h-full bg-slate-700 rounded-lg mt-4  p-8">
        {children}
      </div>
    </>
  );
}
