import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "services/movieAPI";
import {AxiosError} from "axios";
import {Movie} from "interfaces/movie";

// slice bản chất là tạo ra 1 producer trong redux thunk

interface State{
    data: Movie[];
    isLoading: boolean;
    error: string;
    movies: Movie[],
    isShowingMovie: boolean,
    isComingMovie: boolean,
}
const initialState: State = {
    data: [],
    isLoading: false,
    error: "",
    movies: [],
    isShowingMovie: false,
    isComingMovie: false
}

// sử dụng: dispatch(getMovieList(params))

// createAsyncThunk sẽ tự động dispatch 3 action pending/fullfiled/rejected
export const getMovieList = createAsyncThunk(
    "movies/getMovieList",
    // Hàm này nhận vào 2 tham số:
    // - Tham số truyền vào khi dispatch action getMovieList
    // - ThunkAPI: là 1 obj chứa các hàm redux thunk như dispatch, getState, ..
    async()=>{
        // return data => dispatch action movies/getMovieList/pending
        try{
            const data = await movieAPI.getMovieList();
            // Call api thành công thì return về data
            return data;
            // return data => dispatch action movies/getMovieList/fullfiled
        }catch(error){
            // call API thất bại throw error
            // return data 
            // const err = (error as AxiosError).response?.data as any;
            // throw err.content;
            throw error;
            // throw error; => dispatch action mivies/getMovieList/rejected
        }
    }

);


// createSlice tạo 1 producer kết hợp action 
const moviesSlice = createSlice({
    name: "movie",// namespace để tạo ra các action type
    initialState,
    reducers:{
        showingMovie:(state,action)=>{
            const movieShowing = state.data.filter((item)=>item.dangChieu && !item.sapChieu); 

            return {...state, movies:movieShowing,isShowingMovie:true, isComingMovie:false };
        },
        comingMovie:  (state,action)=>{
            const movieComing = state.data.filter((item)=>item.sapChieu && !item.dangChieu);
            return {...state, movies:movieComing, isShowingMovie:false, isComingMovie:true };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getMovieList.pending, (state)=>{
            // request đang thực thi => set isLoading thành true để show loading ra giao diện
            // console.log("pending");
            return {...state, isLoading:true};
        })
        builder.addCase(getMovieList.fulfilled, (state, {payload})=>{
            // payload là data được return từ hàm getMovieList
            return {...state, isLoading:false, data:payload, movies:payload};
        })
        builder.addCase(getMovieList.rejected, (state,{error})=>{
            // console.log("reject");

            // error được throw từ hàm getMovieList
            return {...state, isLoading:false, error: error.message as string};
        })
    },

});
export const {showingMovie, comingMovie} = moviesSlice.actions;
export default moviesSlice.reducer;