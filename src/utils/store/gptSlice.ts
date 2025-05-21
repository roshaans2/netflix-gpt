import { createSlice } from "@reduxjs/toolkit";

interface MovieDetailsInterface {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: any | null;
    budget: number;
    genres: {
      id: number;
      name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
  
interface GPTState {
    showGPTSearch: boolean;
    movieNames: string[] | null;
    movieResults: any[] | null;
    movieDetails:MovieDetailsInterface;
    selectedMovieId:number;
}

const initialMovieDetailsState: MovieDetailsInterface = {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    origin_country: [],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0
};
  

const initialState: GPTState = {
    showGPTSearch: false,
    movieNames: null,
    movieResults: null,
    movieDetails:initialMovieDetailsState,
    selectedMovieId:0
};
  

const gptSlice = createSlice({
    name:'gpt',
    initialState,
    reducers:{
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch = !state.showGPTSearch
        },
        addGptMovieResults:(state,action)=>{
            const {movieNames,movieResults} = action.payload
            state.movieNames = movieNames
            state.movieResults = movieResults
        },
        addGptMovieDetails:(state,action) => {
            state.movieDetails = action.payload
        },
        setSelectedMovieId:(state,action)=>{
            state.selectedMovieId = action.payload
        }
    }
})

export const {toggleGPTSearchView,addGptMovieResults,addGptMovieDetails,setSelectedMovieId} = gptSlice.actions;
export default gptSlice.reducer;