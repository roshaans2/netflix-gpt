import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { RootState } from "../utils/store/appStore";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store:RootState) => store.movies?.nowPlayingMovies);

    const getNowPlayingMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await response.json()
        dispatch(addNowPlayingMovies(data.results))
    }
    
    useEffect(()=>{
       !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;