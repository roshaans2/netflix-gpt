import { IMG_CDN_URL } from "../../utils/constants";

interface MovieCardProps {
    posterPath:string | null,
    id:number,
    onClick:()=>void
}

const MovieCard:React.FC<MovieCardProps> = ({posterPath,onClick}) => {
    if(!posterPath){
        return null;
    }
    return(
        <div className="w-48 pr-4" onClick={onClick}>
            <img src={IMG_CDN_URL + posterPath} alt="MovieCard" />
        </div>
    )
}

export default MovieCard;