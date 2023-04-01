import React from "react";
import Image from "next/image";
import More from "./more";

export default function Home() {
  return (
    <div
      id="home"
      className="w-full h-screen grid grid-cols-2 gap-10 items-center"
    >
      <Image
        src="/images/profile.jpeg"
        alt="profile"
        className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
        width={200}
        height={200}
      />

      <div className="w-full ">
        <h1 className="text-primary font-black text-3xl">Uguumur Oldokh</h1>
        <h2 className="text-secondary text-lg">Software Engineer</h2>
        <div className="text-slate-800">
          I am a Software Engineer with over 5 years of experience in Full-Stack
          software development and 3 years of experience in desktop application
          (.NET, Java) development. My favorite programming languages are
          javascript and python. Also, familiar with C# and java. I have worked
          in both startups and large corporate companies, which means I can
          adapt to any culture, and any project methodology. I am a quick
          learner, who can make effort and complete tasks in a short period to
          production-ready delivery. I truly understand the importance of good
          communication and being responsible.
        </div>
        <button className="mt-8 px-4 py-1 bg-primary hover:bg-secondary rounded text-white">
          More
        </button>
        <More />
      </div>
    </div>
  );
}
