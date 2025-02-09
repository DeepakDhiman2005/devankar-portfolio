import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface ActionState {
    sidebar: boolean;
    [key: string]: boolean | string | number | undefined;  // For dynamic keys
}

const initialState: ActionState = {
    sidebar: false,
};

const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers: {
        setAction: (state, action: PayloadAction<Partial<ActionState>>) => {
            Object.keys(action.payload).forEach((key) => {
                state[key] = action.payload[key];
            });
        },
    },
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;
