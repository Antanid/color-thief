import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

const initialState = {
    image: '',
}

const ImageSlice = createSlice({
    name: 'ImageSlice',
    initialState,
    reducers: {
        addImg(state, action) {
            state.image = action.payload
        }
    }
})

export const { addImg } = ImageSlice.actions

export const setImage = (state: RootState) => state.ImageSlice.image;

export default ImageSlice.reducer;