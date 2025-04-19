import MovieCard from "./MovieCard";

interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface MovieListProps {
    title: string,
    movies: Movie[]
}

const MovieList: React.FC<MovieListProps> = ({ title, movies }) => {
    return (
        <div className="px-6">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="flex">
                    {movies.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;