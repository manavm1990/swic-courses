export function VideoYT({ url, title }: { url: string; title?: string }) {
  let embedUrl: string;

  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else embedUrl = url;

  return (
    <div className="my-6 aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        src={embedUrl}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="100%"
      />
    </div>
  );
}
