import lang from "../utils/languageConstants";

const GPTSearchBar:React.FC = () => {
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang.tamil.gptSearchPlaceholder} />
                <button className="col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg">{lang.tamil.search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;