import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const data = await response.json()
        dispatch(addUpcomingMovies(data.results))
    }
    
    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;