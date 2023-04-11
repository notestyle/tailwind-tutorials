export default function SelectHero() {
  const data = [
    {
      img: "/images/uni.png",
      name: "Unemo",
    },
    {
      img: "/images/chameleon.png",
      name: "Greeny",
    },
    {
      img: "/images/chick.png",
      name: "Chicky",
    },
    {
      img: "/images/kitty.png",
      name: "Super cat",
    },
    {
      img: "/images/panda.png",
      name: "Sleepy",
    },
    {
      img: "/images/police.png",
      name: "Angry police",
    },
    {
      img: "/images/unicorn.png",
      name: "Queen",
    },
  ];

  return (
    <>
      <div className="text-2xl text-white col-span-4 text-center ">
        Select your hero!
      </div>

      {data.map((x, i) => (
        <div
          key={i}
          className="w-full aspect-square rounded border border-white p-2 mix-blend-luminosity hover:mix-blend-normal transition-all ease-in-out duration-500"
        >
          <img src={x.img} alt={data[0].img} className="object-fit" />
        </div>
      ))}
    </>
  );
}
