export function VideoYT({
  url,
  title,
  caption,
}: {
  url: string;
  title?: string;
  caption?: string;
}) {
  let embedUrl = url;

  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  const YTParams = new URLSearchParams({
    rel: "0", // Don't show related videos from other channels whenever paused
  });

  return (
    <figure className="my-6">
      {/*
       * * Keep these classes in outer `div` to
       * allow the `figcaption` to be visible.
       */}
      <div className="aspect-video w-full overflow-hidden rounded-xl">
        <iframe
          src={`${embedUrl}?${YTParams.toString()}`}
          title={title || "YouTube video"}
          allowFullScreen
          width="100%"
          height="100%"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
