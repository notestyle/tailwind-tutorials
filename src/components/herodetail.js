export default function HeroDetail() {
  // declare a state named hero => { name, img, power, health, speed }
  // coin => 10000
  const hero = {
    img: "/images/uni.png",
    name: "Unemo",
    power: 100,
    speed: 10,
    health: 1000,
  };

  const coin = 1000;

  return (
    <>
      <img src={hero.img} alt="hero" />
      <div className=" flex flex-col gap-2">
        <div className="text-white text-xl font-bold">{hero.name}</div>
        <div className="text-white flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          {hero.power}
        </div>

        <div className="text-white flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
              clipRule="evenodd"
            />
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
          </svg>
          {hero.health}
        </div>
        <div className="text-white flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
              clipRule="evenodd"
            />
          </svg>
          {hero.speed}
        </div>
        <div className="flex gap-2 text-yellow-400 mt-20 font-bold text-xl items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-400 w-6 h-6"
          >
            <path
              fill="currentColor"
              d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Zm-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4a2.5 2.5 0 0 0-2-4h-1v-2h-2v2h-3v8h3Zm-1-3h4a.5.5 0 0 1 0 1h-4v-1Zm0-3h4a.5.5 0 0 1 0 1h-4v-1Z"
            />
          </svg>
          {coin}
        </div>
        <button className="bg-pink-500 rounded-lg text-white hover:animate-bounce ">
          Upgrade
        </button>
      </div>
    </>
  );
}
