export async function getYoutubeVideoData(
  videoId: string
) {

  console.log("YouTube ID:", videoId);
  console.log(
    "API KEY EXISTS:",
    !!process.env.YOUTUBE_API_KEY
  );


  const url =
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.YOUTUBE_API_KEY}&part=snippet`;


  console.log("Request URL:", url.replace(
    process.env.YOUTUBE_API_KEY ?? "",
    "HIDDEN"
  ));


  const response = await fetch(url);


  const data = await response.json();


  console.log(data);


  if (!data.items || data.items.length === 0) {
    return null;
  }


  const video = data.items[0];


  return {
    title: video.snippet.title,
    description: video.snippet.description,
    channel: video.snippet.channelTitle,
    thumbnail:
      video.snippet.thumbnails.high.url,
  };
}