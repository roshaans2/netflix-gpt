import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/store/appStore";
import { addGptMovieDetails } from "../../utils/store/gptSlice";

interface MovieDetailsProps {
    id:number,
    onClose:()=>void
}

const MovieDetails:React.FC<MovieDetailsProps> = ({id,onClose}) => {
    const movie = useSelector((store:RootState) => store.gpt?.movieDetails);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(()=>{
        const getMovieDetails = async() => {
            setLoading(true);
            const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,API_OPTIONS)
            const json = await data.json();
            dispatch(addGptMovieDetails(json));
            setLoading(false); 
        }
        getMovieDetails();
    },[id,dispatch])
    if (loading) {
    return (
        <div className="text-white p-6 flex justify-center items-center min-h-60">
            Loading movie details...
        </div>
    );
}
    return (
        <div className="relative flex flex-col md:flex-row gap-6 p-6 shadow-lg bg-black-100">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
                aria-label="Close"
            >
                &times;
            </button>
            <div className="w-full md:w-1/3">
                {movie?.poster_path ? (
                    <img
                        src={IMG_CDN_URL + movie.poster_path}
                        alt="Movie Poster"
                        className="rounded-lg w-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-black-100 rounded-lg flex items-center justify-center">
                        No Image
                    </div>
                )}
            </div>
            <div className="w-full md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold">{movie?.title}</h2>
                <p className="text-white-700">{movie?.overview}</p>
                <div>
                    <span className="font-semibold">Genres:</span>{" "}
                    {movie?.genres?.map(g => g.name).join(", ")}
                </div>
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Release Date:</span> {movie?.release_date}
                    </p>
                    <p>
                        <span className="font-semibold">Runtime:</span> {movie?.runtime} minutes
                    </p>
                    <p>
                        <span className="font-semibold">Rating:</span> {movie?.vote_average}
                    </p>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Production Companies:</h3>
                    {movie?.production_companies?.map(company => (
                        <div key={company.id} className="flex items-center mb-3">
                            {company.logo_path && (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                                    alt={company.name}
                                    className="h-8 w-auto mr-3 bg-white p-1 rounded"
                                />
                            )}
                            <span>{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MovieDetails;