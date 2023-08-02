import { configureStore } from "@reduxjs/toolkit";
import ImageSlice from "./ImageSlice";
import { useDispatch } from 'react-redux';


export const store =  configureStore({
    reducer : {
        ImageSlice
    }
})

export type RootState = ReturnType <typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();