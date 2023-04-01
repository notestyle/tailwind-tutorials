import React from "react";
import Image from "next/image";

export default function Project() {
  return (
    <div id="project" className="w-full h-screen py-28">
      <h1 className="text-3xl text-primary font-bold">My projects</h1>
      <div className="grid grid-cols-4 gap-10 mt-8">
        <Image
          src="/images/background-min.png"
          alt="profile"
          className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
          width={200}
          height={200}
        />
        <Image
          src="/images/background-min.png"
          alt="profile"
          className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
          width={200}
          height={200}
        />
        <Image
          src="/images/background-min.png"
          alt="profile"
          className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
          width={200}
          height={200}
        />
        <Image
          src="/images/background-min.png"
          alt="profile"
          className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
          width={200}
          height={200}
        />
        <Image
          src="/images/background-min.png"
          alt="profile"
          className="object-cover object-top w-full aspect-square rounded-xl -scale-x-100 hover:-skew-y-2 transition ease-in-out duration-300 border-spacing-6 hover:border-8 border-secondary shadow-2xl hover:shadow-secondary shadow-secondary"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
