import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import movies from "slices/movies";
const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increase:(state)=>{
            return state + 1;
        },
        decrease:(state)=>{
            return state - 1;
        },
        increaseByAmount: (state: number, {payload}: PayloadAction<number>)=>{
            
            return state + payload;
        }
    }
})

export const { increase, decrease, increaseByAmount} = counterSlice.actions;

// Reducer
export default counterSlice.reducer;