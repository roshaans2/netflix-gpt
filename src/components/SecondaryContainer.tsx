import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);
    console.log(movies);
    return (
        <div className="bg-black">
            <div className="-mt-72 relative z-10 p-4">
                <MovieList title="Now Playing" movies={movies?.nowPlayingMovies ?? []} />
                <MovieList title="Popular" movies={movies?.popularMovies ?? []} />
                <MovieList title="Top Rated" movies={movies?.topRatedMovies ?? []} />
                <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies ?? []} />
            </div>
        </div>
    )   
   
}
export default SecondaryContainer;