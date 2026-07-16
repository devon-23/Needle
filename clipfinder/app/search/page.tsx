import { prisma } from "@/lib/prisma";
import VideoCard from "@/components/VideoCard";


export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
  }>;
}) {

  const { q } = await searchParams;

  const query = q ?? "";


 const terms = query
  .split(" ")
  .map((term) => term.trim())
  .filter(Boolean);


const videos = await prisma.video.findMany({
  where: {
    OR: terms.flatMap((term) => [
      {
        title: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        description: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        tags: {
          some: {
            name: {
              contains: term,
              mode: "insensitive",
            },
          },
        },
      },
    ]),
  },

  include: {
    tags: true,
  },
});


  return (
    <main className="min-h-screen bg-neutral-950 text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Results for "{query}"
      </h1>


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