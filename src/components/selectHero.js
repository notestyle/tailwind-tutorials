import HeroDetail from "./herodetail";
import { useState } from "react";

export default function SelectHero({ data }) {
  const [showHeroDetail, setShowHeroDetail] = useState(false);

  const selectedHero = data[0];
  return (
    <>
      <div className="text-2xl text-white col-span-4 text-center ">
        Select your hero!
      </div>

      {showHeroDetail ? (
        // hero нь props гэж нэрлэгдэнэ
        <HeroDetail hero={selectedHero} />
      ) : (
        data.map((x, i) => (
          <div
            key={i}
            onClick={() => {
              console.log("selected hero: ", x);

              setShowHeroDetail(true);
            }}
            className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500"
          >
            <img src={x.img} alt={data[0].img} className="object-fit" />
          </div>
        ))
      )}
    </>
  );
}
