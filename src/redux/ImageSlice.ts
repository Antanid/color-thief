import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

const initialState = {
    image : '',
    palette: [],
}

const ImageSlice = createSlice({
    name: 'ImageSlice',
    initialState,
    reducers:{
        addImg(state, action) {
            state.image = action.payload
        },
        addPalette(state, action) {
            state.palette = action.payload
        }
    }
})

export const {addImg} = ImageSlice.actions

export const setImage = (state: RootState) => state.ImageSlice.image;
export const setImagePalette = (state: RootState) => state.ImageSlice.palette;

export default ImageSlice.reducer;