import { prisma } from "@/lib/prisma";
import { extractYoutubeId } from "@/lib/youtube";
import { NextResponse } from "next/server";
import { getYoutubeVideoData } from "@/services/youtube";


export async function POST(request: Request) {

  const body = await request.json();

  const youtubeId = extractYoutubeId(body.url);
  const youtubeData = await getYoutubeVideoData(
  youtubeId!
);


if (!youtubeData) {
  return NextResponse.json(
    {error:"Could not find YouTube video"},
    {status:404}
  );
}


  if (!youtubeId) {
    return NextResponse.json(
      { error: "Invalid YouTube URL" },
      { status: 400 }
    );
  }


  const existingVideo = await prisma.video.findUnique({
    where: {
      youtubeId,
    },
  });


  if (existingVideo) {
    return NextResponse.json(
      { error: "This video already exists" },
      { status: 409 }
    );
  }


  const tags = body.tags
    ? body.tags
        .split(",")
        .map((tag:string) => tag.trim())
        .filter(Boolean)
    : [];


  const video = await prisma.video.create({
    data:{
      title: youtubeData.title,
      youtubeId,

      creator: youtubeData.channel,
      thumbnail: youtubeData.thumbnail,
      description: youtubeData.description,

      tags:{
        create: tags.map((tag:string)=>({
          name:tag
        }))
      }
    },

    include:{
      tags:true,
    },
  });


  return NextResponse.json(video);
}