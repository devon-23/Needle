import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");


  if (!query) {
    return NextResponse.json([]);
  }


  const videos = await prisma.video.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },
  });


  return NextResponse.json(videos);
}