export function VideoPlayer({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded border border-cyan-300/20 bg-black shadow-glow">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
