import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './slices/CounterSlice.jsx';

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
    }
})