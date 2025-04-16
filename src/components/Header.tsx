import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { removeUser, UserState } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((store: RootState) => store.user as UserState) ?? {};
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate("/");
            })
            .catch(() => {
                navigate("/error");
            });
    };

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img
                className="w-44"
                src={NETFLIX_LOGO}
                alt="logo"
            />
            {user?.uid && (
                <div className="flex p-2">
                    <img
                        className="h-12 w-12"
                        src={user.photoURL ?? "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"}
                        alt="usericon"
                    />
                    <button onClick={handleSignOut} className="font-bold text-white ml-4">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
