import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrentUser } from "../interfaces/auth";
import authAPI from "services/loginAPI";
interface AuthState {
  // thông tin của user đăng nhập
  currentUser: CurrentUser;
  isLoading: boolean;
  error?: string;
}
const initialState:AuthState = {
//   currentUser: {} as CurrentUser,
  currentUser: JSON.parse(localStorage.getItem("user") as string) || {},
  isLoading: false,
  error: "",
};

// thunk actions
export const login = createAsyncThunk("auth/login",
    async(values:any)=>{
        try{
            console.log(values);
            
            const data = await authAPI.login(values);
            // lưu thông tin đăng nhập vào localStorage
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        }catch(error){
            throw error;
        }
    }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state:AuthState)=>{
        // xoá thông tin user khỏi localStorage
        localStorage.removeItem("user");
        // set state currentUser về obj rỗng
        return {...state, currentUser:{} as CurrentUser};
    }
  },
  extraReducers: (builder) => {
    // auth/login/pending
    builder.addCase(login.pending, (state) => {
      return { ...state, isLoading: true, error: "" };
    });
    // auth/login/fulfilled
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, currentUser: payload };
    });
    builder.addCase(login.rejected, (state, { error }) => {
        return {...state, isLoading: false, error:error.message as string}
      });
  },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
