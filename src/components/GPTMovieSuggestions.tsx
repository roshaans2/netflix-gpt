import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetail";
import { setSelectedMovieId } from "../utils/gptSlice";

const GPTMovieSuggestions:React.FC = () => {
    const {movieResults,movieNames,selectedMovieId} = useSelector((store:RootState) => store.gpt);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setSelectedMovieId(0))
    }
    if(!movieNames || !movieResults){
        return <></>;
    }

    return selectedMovieId ? (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <MovieDetails id={selectedMovieId} onClose={handleClose}/>
        </div>
    ):(
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            {movieNames.map((movieName,index)=>(<MovieList key={index} title={movieName} movies={movieResults[index]} />))}
        </div>
    )
}

export default GPTMovieSuggestions;

