import React from "react";

function Home() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-slate-800">
      {/* sm md lg xl */}
      <div className="w-full md:w-1/2 lg:w-1/3 bg-rose-600 h-96 xl:hidden"></div>
      <div className="w-full md:w-1/2 lg:w-2/3 bg-teal-500 h-96 xl:w-full"></div>
    </div>
  );
}

export default Home;
