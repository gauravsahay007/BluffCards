import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    users: []
};

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        updateRoom: (state, action) => {
            const {users, name} = action.payload;
            state.users = users;
            state.name = name;

        },
        removeRoom: (state, action) => {
            state.users = [];
            state.name = "";
        }
    }
});

export const { updateRoom, removeRoom } = roomSlice.actions;

export default roomSlice.reducer;
  