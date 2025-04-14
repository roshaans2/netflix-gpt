import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export interface UserState {
    uid?: string | null;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
}

const initialState: UserState = {
    uid:"",
    displayName: "",
    email: "",
    photoURL: ""
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action:PayloadAction<UserState>) => {
            return action.payload
        },
        removeUser:() => {
            return initialState;
        }
    }
})

export const loadUser = () => (dispatch: AppDispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(addUser({ 
                uid: user.uid, 
                displayName: user.displayName, 
                email: user.email, 
                photoURL: user.photoURL 
            }));
        } else {
            dispatch(removeUser());
        }
    });
};

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer;