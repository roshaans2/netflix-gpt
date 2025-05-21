import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { RootState } from "../../utils/store/appStore";
import { useRef } from "react";
import { genai } from "../../utils/genai";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResults } from "../../utils/store/gptSlice";

const GPTSearchBar:React.FC = () => {
    const langKey = useSelector((store:RootState)=>store.config.lang)
    const searchText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async(movie:string) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
        const json = await data.json();
        return json.results;
    }
    const handleGptSearchClick = async()=>{
        const query = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current!.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Retro, Tourist Family, Gangers, Good Bad Ugly, Vidamuyarchi. Please follow this example result format."
        const response = await genai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: query,
        });
        const movies = response.text!.split(",");
        const promiseArray = movies.map((movie)=>searchMovieTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray)
        dispatch(addGptMovieResults({movieNames:movies,movieResults:tmdbResults}))
    }
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;