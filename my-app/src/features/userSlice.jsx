import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
        name: "invalid",
        email: "invalid@gmail.com",
        cards: [],
        pic : "",
        uid : "",
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { name, email, cards ,pic,uid} = action.payload;
            state.user.name = name;
            state.user.email = email;
            state.user.cards = cards;
            state.user.pic = pic;
            state.user.uid = uid;
        },
        removeUser: (state, action) => {
            state.user.name = "invalid";
            state.user.email = "invalid@gmail.com";
            state.user.cards = [];
            state.user.uid = ""
        }
    }
});

export const { updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
  