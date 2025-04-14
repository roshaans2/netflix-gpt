import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);
    if(!movies){
        return <div>No movies to watch</div>
    }
    const mainMovie = movies[0];
    const {original_title,overview,id} = mainMovie;

    return(
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;