import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";



const useTrailerVideo = (movieId:number) => {
    const dispatch = useDispatch();
    const trailer = useSelector((store:RootState)=>store.movies?.trailerVideo)
    const getMovieVideos = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const data = await response.json();
        const filterData = data.results.filter((video: { type: string }) => video.type === "Trailer")
        const trailer = filterData.length? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        !trailer && getMovieVideos();
    },[])
    return trailer;
}
export default useTrailerVideo;