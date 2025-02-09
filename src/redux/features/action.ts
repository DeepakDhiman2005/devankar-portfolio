import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
    sidebar: false
}

const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        setAction: (state, {payload}) => {
            Object.keys(payload).forEach((key) => {
                state[key] = payload[key];
            })
        }
    }
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;