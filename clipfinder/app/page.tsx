import { prisma } from "@/lib/prisma";
import VideoCard from "@/components/VideoCard";
import SearchBar from "@/components/SearchBar";

export default async function Home() {

  const videos = await prisma.video.findMany({
  orderBy:{
    createdAt:"desc"
  },
  include:{
    tags:true,
  }
});


  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">

      <h1 className="text-6xl font-bold mb-4">
        ClipFinder
      </h1>


      <p className="text-neutral-400 mb-10">
        Find internet videos by describing what you remember.
      </p>
      <SearchBar />

      <div className="grid gap-8 max-w-3xl">

        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            youtubeId={video.youtubeId}
            description={video.description}
            tags={video.tags}
          />
        ))}

      </div>

    </main>
  );
}