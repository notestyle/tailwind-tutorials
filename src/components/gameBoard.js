import SelectHero from "./selectHero";

export default function GameBoard() {
  return (
    <>
      <div className="w-full h-full bg-slate-700 rounded-lg mt-4 p-8">
        <SelectHero />
      </div>
    </>
  );
}
