import { configureStore } from "@reduxjs/toolkit";

// features
import action from './features/action';

const store = configureStore({
    reducer: {
        action,
    },
});

export default store;