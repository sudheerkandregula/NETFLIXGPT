import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

// VideoBackground.js
const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  
    if (!trailerVideo?.key) return null;
  
    return (
      <div className="absolute w-full pt-[56.25%] overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {/* Optional dark overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </div>
    );
  };
  

export default VideoBackground;
