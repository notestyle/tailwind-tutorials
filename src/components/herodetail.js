import React from "react";

export default function HeroDetail({ hero }) {
  return (
    <>
      <img src={hero.img} alt="hero" />
      <div className=" col-span-3">
        <div className="text-white">{hero.name}</div>
        <div className="text-white">{hero.power}</div>
        <div className="text-white">{hero.health}</div>
        <div className="text-white">{hero.speed}</div>
      </div>
      <button className="bg-pink-500 col-span-3 rounded-lg text-white">
        Upgrade
      </button>
    </>
  );
}
