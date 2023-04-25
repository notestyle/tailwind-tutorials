import Link from "next/link";
import { useState, useEffect } from "react";

export default function SelectHero() {
  const [heroes, setHeroes] = useState([]);

  function getData() {
    fetch("http://192.168.88.120:8080/heroes")
      .then((response) => response.json())
      .then((result) => setHeroes(result.data));
  }

  useEffect(() => getData(), []);

  return (
    <>
      <div className="text-2xl text-white col-span-4 text-center ">
        Select your hero!
      </div>

      <div className="w-full grid grid-cols-4 gap-4">
        {heroes.map((x, i) => (
          <Link
            key={i}
            href={`/hero/${x.id}`}
            className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500"
          >
            <img src={x.img} alt={x.img} className="object-fit" />
          </Link>
        ))}
      </div>
    </>
  );
}
