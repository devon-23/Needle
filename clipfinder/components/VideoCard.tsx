type VideoProps = {
  title:string;
  youtubeId:string;
  description?:string|null;
  tags?: {
    name:string;
  }[];
};


export default function VideoCard({
  title,
  youtubeId,
  description,
  tags,
}: VideoProps) {

  return (
    <div className="bg-neutral-900 rounded-xl p-5 border border-neutral-800">

      <h2 className="text-xl font-bold mb-3">
        {title}
      </h2>


      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allowFullScreen
        />
      </div>


      {description && (
        <p className="text-neutral-400 mt-3">
          {description}
        </p>
      )}

      {tags && (
        <div className="flex gap-2 flex-wrap mt-4">

          {tags.map((tag)=>(
            <span
              key={tag.name}
              className="bg-neutral-800 px-3 py-1 rounded-full text-sm"
            >
              {tag.name}
            </span>
          ))}

        </div>
      )}

    </div>
  );
}