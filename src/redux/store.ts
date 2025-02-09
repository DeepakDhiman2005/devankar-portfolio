import { configureStore } from "@reduxjs/toolkit";
import actionReducer from "./features/action";

export const store = configureStore({
    reducer: {
        action: actionReducer,
    },
});

// ✅ Define RootState type
export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
