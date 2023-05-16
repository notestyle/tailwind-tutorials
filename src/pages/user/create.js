import { useRouter } from "next/router";
import React, { useState } from "react";

export default function HeroDetail() {
  const [user, setUser] = useState({});
  const [name, setName] = useState('')
  const router = useRouter();

  /**
   * 
   * {
    "name": "Uguumur Oldokh",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/612.jpg",
    "items": "$mockData",
    "count": 10,
    "anyKey": "anyValue"
}
   */

  return (
    <>
      <div className="w-full min-h-screen bg-slate-900 py-20 px-40">
        <div className="text-3xl text-white font-bold text-center">
          Create user
        </div>
        <div>
          <input onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
    </>
  );
}
