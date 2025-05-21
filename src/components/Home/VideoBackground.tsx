import {  useSelector } from "react-redux"
import { RootState } from "../../utils/store/appStore"
import useTrailerVideo from "../../hooks/useTrailerVideo"

interface Video {
    key:string
}

const VideoBackground = ({movieId}:{movieId:number}) => {
    useTrailerVideo(movieId);
    const trailer = useSelector((store:RootState) => store.movies?.trailerVideo as Video | null)
    return(
        <div className="">
             {trailer ? (
                <iframe
                    className="w-full aspect-video"
                    src={"https://www.youtube.com/embed/"+trailer.key + "?autoplay=1&mute=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            ) : (
                <p>Loading trailer...</p>
            )}
        </div>
    )
}

export default VideoBackground;