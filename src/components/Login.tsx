import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, UserState } from "../utils/userSlice";
import { RootState } from "../utils/appStore";
import { DEFAULT_USER_PROFILE, NETFLIX_BACKGROUND } from "../utils/constants";

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const user = useSelector((store: RootState) => store.user as UserState) ?? {};
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({ 
                    uid: user.uid, 
                    displayName: user.displayName, 
                    email: user.email, 
                    photoURL: user.photoURL 
                }));
                navigate("/browse");
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if (!emailRef.current || !passwordRef.current) return;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const message = checkValidData(email, password);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    return updateProfile(user, {
                        displayName: nameRef.current?.value,
                        photoURL: DEFAULT_USER_PROFILE
                    }).then(() => {
                        dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
                        navigate("/browse");
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user.photoURL }));
                    navigate("/browse");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={NETFLIX_BACKGROUND} alt="hero-bg" />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" ref={nameRef} placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80" />}
                <input ref={emailRef} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80" />
                <input ref={passwordRef} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80" />
                <p className="text-red-500 py-2">{errorMessage}</p>
                <button onClick={handleBtnClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="px-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login;
