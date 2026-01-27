interface VideoPlayerProps {
  videoUrl: string;
  posterImage?: string;
  trainerName: string;
}

export function VideoPlayer({ videoUrl, posterImage, trainerName }: VideoPlayerProps) {
  return (
    <section className="py-8">
      <div className="container-mobile">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Meet {trainerName}
        </h2>
        <div className="rounded-xl overflow-hidden bg-gray-900 shadow-lg">
          <video
            className="w-full aspect-video"
            controls
            poster={posterImage}
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            <p className="text-white text-center p-8">
              Your browser does not support the video tag.
            </p>
          </video>
        </div>
      </div>
    </section>
  );
}
