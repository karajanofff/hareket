export function VideoPlayer({ youtubeId, title }: { youtubeId: string; title: string }) {
  return (
    <div className="overflow-hidden rounded border border-white/10 bg-black shadow-glow">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
