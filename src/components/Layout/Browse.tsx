import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Header from "./Header";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/store/movieSlice";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import { RootState } from "../../utils/store/appStore";
import { addUser, removeUser, UserState } from "../../utils/store/userSlice";
import MainContainer from "../Home/MainContainer";
import SecondaryContainer from "../Home/SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import GPTSearch from "../GPT/GPTSearch";

const Browse: React.FC = () => {
    const showGPTSearch = useSelector((store: RootState) => store.gpt.showGPTSearch);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }));
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    return (
        <div>
            <Header />
            {showGPTSearch ? (
                <GPTSearch />
            ) :
                (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
                )
            }

        </div>
    );
};

export default Browse;
