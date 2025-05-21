import { useSelector } from "react-redux";
import MovieList from "../Movie/MovieList";
import { RootState } from "../../utils/store/appStore";
import { useState } from "react";

const SecondaryContainer = () => {
    const movies = useSelector((store: RootState) => store.movies);
    const [selectedMovieId,setSelectedMovieId] = useState<number>(0);
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-10 p-4">
                <MovieList title="Now Playing" movies={movies?.nowPlayingMovies ?? []} />
                <MovieList title="Popular" movies={movies?.popularMovies ?? []} />
                <MovieList title="Top Rated" movies={movies?.topRatedMovies ?? []}/>
                <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies ?? []} />
            </div>
        </div>
    )   
   
}
export default SecondaryContainer;