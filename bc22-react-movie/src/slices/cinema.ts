import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { chiTietPhim, cinema, unitCenema } from "interfaces/cinema";
import { Dictionary } from "lodash";
import { cinemaAPI } from "services/cinemaAPI";

interface State {
  cinemaList: cinema[];
  isLoading: boolean;
  error: string;
  unitCinemaList: unitCenema[];
  chiTietPhim: chiTietPhim;
}

const initialState: State = {
  cinemaList: [],
  isLoading: false,
  error: "",
  unitCinemaList:[],
  chiTietPhim: {} as chiTietPhim
};

// tạo ra createAsyncThunk đẻ thực hiện call api và dispatch ra 3 action pending/ fullfield/rejected

export const getCinemaList = createAsyncThunk("cinema/getCinemaList", async () => {
  try {
    const data = await cinemaAPI.getCinemaList();
    return data;
  } catch (error) {
    throw error;
  }
});


export const getUnitCinemaList = createAsyncThunk(
  "cinema/getUnitCinemaList",
  async (cinemaCode:string)=>{
    try {
      const data = await cinemaAPI.getUnitCinemaList(cinemaCode);
      return data;
    } catch (error) {
      throw error;
    }
  }
)
// tạo ra createAsyncThunk đẻ thực hiện call api và dispatch ra 3 action pending/ fullfield/rejected

export const getShowTimeMovie = createAsyncThunk("cinema/getShowTimeMovie", async (maPhim:number) => {
  try {
    const data = await cinemaAPI.getShowTimeMovie(maPhim);
    return data;
  } catch (error) {
    throw error;
  }
});

// tạo ra createSlice: kết hợp producer vs action

const cinemaSlice = createSlice({
  name: "cinema",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCinemaList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getCinemaList.fulfilled, (state, { payload }) => {
      // payload là data được return từ hàm getCinemaList
      return { ...state, isLoading: false, cinemaList: payload };
    });
    builder.addCase(getCinemaList.rejected, (state, { error }) => {
      // error được throw từ hàm getCinemaList
      return { ...state, isLoading: false, error: error.message as string };
    });
    builder.addCase(getUnitCinemaList.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getUnitCinemaList.fulfilled, (state, { payload }) => {
      // payload là data được return từ hàm getCinemaList
      return { ...state, isLoading: false, unitCinemaList: payload};
    });
    builder.addCase(getUnitCinemaList.rejected, (state, { error }) => {
      // error được throw từ hàm getCinemaList
      return { ...state, isLoading: false, error: error.message as string };
    });
    builder.addCase(getShowTimeMovie.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getShowTimeMovie.fulfilled, (state, { payload }) => {
      // payload là data được return từ hàm getCinemaList
      return { ...state, isLoading: false, chiTietPhim: payload};
    });
    builder.addCase(getShowTimeMovie.rejected, (state, { error }) => {
      // error được throw từ hàm getCinemaList
      return { ...state, isLoading: false, error: error.message as string };
    });
    
  },
  
});




export default cinemaSlice.reducer;