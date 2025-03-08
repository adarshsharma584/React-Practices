import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state, action) => {
            state.count += 1;
        },
        decreament: (state, action) => {
            state.count -= 1;
        },
        resetCount: (state, action) => {
            state.count = 0;
        },
        addCountByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increament, decreament, resetCount, addCountByAmount } = counterSlice.actions;
export default counterSlice.reducer;