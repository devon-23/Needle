type VideoProps = {
  title: string;
  youtubeId: string;
  description?: string | null;
  creator?: string | null;
  thumbnail?: string | null;
  tags?: {
    name: string;
  }[];
};


export default function VideoCard({
  title,
  youtubeId,
  description,
  creator,
  thumbnail,
  tags,
}: VideoProps) {


  return (
    <div className="bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800">


      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
        />
      )}


      <div className="p-5">


        <h2 className="text-xl font-bold">
          {title}
        </h2>


        {creator && (
          <p className="text-neutral-400 mt-1">
            {creator}
          </p>
        )}



        <div className="mt-5 aspect-video">

          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allowFullScreen
          />

        </div>



        {tags && tags.length > 0 && (

          <div className="flex flex-wrap gap-2 mt-5">

            {tags.map((tag)=>(
              <span
                key={tag.name}
                className="bg-neutral-800 rounded-full px-3 py-1 text-sm"
              >
                #{tag.name}
              </span>
            ))}

          </div>

        )}



        {description && (

          <p className="text-neutral-400 mt-5 text-sm">
            {description}
          </p>

        )}


      </div>

    </div>
  );
}