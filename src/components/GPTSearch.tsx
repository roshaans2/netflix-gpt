import { NETFLIX_BACKGROUND } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch:React.FC = () => {
    return(
        <div>
            <div className="fixed -z-10">
                <img src={NETFLIX_BACKGROUND} alt="hero-bg" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
};

export default GPTSearch;