"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function SearchBar(){

  const [query,setQuery] = useState("");

  const router = useRouter();


  function search(){

    if (!query.trim()) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(query)}`);

  }


  return (
    <div className="flex gap-3 max-w-2xl">

      <input
        className="flex-1 rounded-lg bg-neutral-900 border border-neutral-700 px-4 py-3"
        placeholder="Describe the video..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
      />


      <button
        onClick={search}
        className="bg-blue-600 px-6 rounded-lg"
      >
        Search
      </button>

    </div>
  );
}