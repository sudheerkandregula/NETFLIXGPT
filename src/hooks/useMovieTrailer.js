import { useEffect } from 'react'
import { api_options } from '../utils/constants'
import { useDispatch} from 'react-redux';
import { addtrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  
    const getMovieVideos = async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          api_options
        );
        const json = await response.json();
  
        const filterdata = (json.results || []).filter(
          (video) => video.type === "Trailer"
        );
  
        const trailer = filterdata.length > 0 ? filterdata[0] : json.results?.[0];
        dispatch(addtrailerVideo(trailer));
      } catch (err) {
        console.error("Error fetching movie trailer:", err);
      }
    };
  
    useEffect(() => {
      if (movieId) {
        getMovieVideos(movieId);
      }
    }, [movieId]); // ✅ re-run if movieId changes
  };

export default useMovieTrailer;
