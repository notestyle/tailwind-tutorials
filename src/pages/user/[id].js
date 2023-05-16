import { useRouter } from "next/router";
import React, { useState } from "react";

export default function HeroDetail() {
  const [user, setUser] = useState({});
  const router = useRouter();
  console.log(router.query.id);

  

  return (
    <>
      <div className="w-full min-h-screen bg-slate-900 py-20 px-40">
        <div className="text-3xl text-white font-bold text-center">
          Cute fight
        </div>
       
      </div>
    </>
  );
}
