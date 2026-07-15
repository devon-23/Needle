import { prisma } from "@/lib/prisma";
import { extractYoutubeId } from "@/lib/youtube";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  const youtubeId = extractYoutubeId(body.url);

  if (!youtubeId) {
    return NextResponse.json(
      { error: "Invalid YouTube URL" },
      { status: 400 }
    );
  }


  const video = await prisma.video.create({
    data: {
      title: body.title,
      youtubeId,
      description: body.description,
    },
  });


  return NextResponse.json(video);
}