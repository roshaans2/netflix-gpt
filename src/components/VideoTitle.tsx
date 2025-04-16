interface VideoTitleProps {
    title:string,
    overview:string
}

const PlayIcon = () => (
    <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

const VideoTitle = ({title,overview}:VideoTitleProps) => {
    return(
        <div className="w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-4">
                <button className="bg-white text-black px-12 p-3 text-xl flex items-center gap-2  rounded-lg hover:bg-opacity-80"> <PlayIcon />Play</button>
                <button className="bg-gray-500 text-white px-12 p-3 text-xl flex items-center gap-2 bg-opacity-50 rounded-lg">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;