import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { RootState } from "../utils/appStore";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store:RootState) => store.movies?.popularMovies);

    const getPopularMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const data = await response.json()
        dispatch(addPopularMovies(data.results))
    }
    
    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;