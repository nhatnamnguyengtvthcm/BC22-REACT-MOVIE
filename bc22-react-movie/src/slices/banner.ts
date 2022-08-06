
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {Banner} from "interfaces/movie"
import movieAPI from "services/movieAPI";
import axios, {AxiosError} from "axios";

export interface BannerState{
    data: Banner[],
    error: string
}

const initialState:BannerState = {
    data:[],
    error: ""
}

// createAsyncThunk sẽ tự động dispatch 3 action pending/fullfiled/rejected
export const getBannerList = createAsyncThunk(
    "movies/getMovieBanner",
    // Hàm này nhận vào 2 tham số:
    // - Tham số truyền vào khi dispatch action getMovieList
    // - ThunkAPI: là 1 obj chứa các hàm redux thunk như dispatch, getState, ..
    async()=>{
        try {
            const data = await movieAPI.getMovieBanner();
            // Call api thành công thì return data
            // console.log("nam");
            
            return data;
        } catch (error) {
            throw error;
        }
    }

)
// createSlice tạo 1 producer kết hợp action 
const bannerSlice = createSlice({
    name: "banner",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getBannerList.pending, (state)=>{
            // request đang thực thi => set isLoading thành true để show loading ra giao diện
            return {...state};
        })
        builder.addCase(getBannerList.fulfilled, (state, {payload})=>{
            // payload là data được return từ hàm getBannerList
            // console.log(payload);
            return {...state, data:payload};
        })
        builder.addCase(getBannerList.rejected, (state,{error})=>{
            // error được throw từ hàm getBannerList
            return {...state,error: error.message as string};
        })
    },

})


export default bannerSlice.reducer;