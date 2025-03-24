import { MouseEventHandler, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login:React.FC = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState<string | null>(null);

    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm) 
    }
    const handleBtnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const message = checkValidData(email?.current?.value,password?.current?.value)
        setErrorMessage(message);
    }
    return(
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg" alt="hero-bg " />
            </div>
            <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80" />}
                <input ref={email} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80" />
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-900 bg-opacity-80"/>
                <p className="text-red-500 py-2">{errorMessage}</p>
                <button onClick={handleBtnClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
                <p className="px-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;