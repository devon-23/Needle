"use client";

import { useState } from "react";


export default function AdminPage() {

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  
 async function addVideo() {

  const response = await fetch("/api/videos", {
    method: "POST",
    headers:{
      "Content-Type":"application/json",
    },
    body: JSON.stringify({
      url,
      title,
      tags,
    }),
  });


  const data = await response.json();


  if (!response.ok) {
    alert(data.error);
    return;
  }


  setUrl("");
  setTitle("");
  setTags("");

  alert("Video added!");
}


  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Add Video
      </h1>


      <div className="max-w-xl space-y-4">

        <input
          className="w-full rounded-lg bg-neutral-900 border border-neutral-700 p-3"
          placeholder="YouTube URL"
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />


        <input
          className="w-full rounded-lg bg-neutral-900 border border-neutral-700 p-3"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />


        <input
          className="w-full rounded-lg bg-neutral-900 border border-neutral-700 p-3"
          placeholder="Tags"
          value={tags}
          onChange={(e)=>setTags(e.target.value)}
        />


        <button
          onClick={addVideo}
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Add Video
        </button>

      </div>

    </main>
  );
}