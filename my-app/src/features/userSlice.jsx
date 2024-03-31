import { createSlice } from "@reduxjs/toolkit";
import { shuffleCards } from "../Api/shuffleCards";


const initialState = {
    user:{
        name: "invalid",
        email: "invalid@gmail.com",
        cards: [],
        pic : "",
        uid : "",
    },
    room:{
        name: "",
        id: "",
        users: [],
        distributedCards: {},
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
        },
        updateRoom: (state, action) => {
            const { users, name} = action.payload;
            const card = shuffleCards();
            const numUsers = users.length;
            const numCards = card.length;
            const idealCardsPerUser = Math.floor(numCards / numUsers);
            const remainingCards = numCards % numUsers;
            var distributedCards = {};
            let cardIndex = 0;
            for (let i = 0; i < numUsers; i++) {
              const userId = users[i];
              const numCardsToDistribute = idealCardsPerUser + (i < remainingCards ? 1 : 0);
              distributedCards[userId] = card.slice(cardIndex, cardIndex + numCardsToDistribute);
              cardIndex += numCardsToDistribute;
            }
            distributedCards;
        
            state.room.users = users;
            state.room.name = name;
            state.room.distributedCards = distributedCards;
            
        },
        removeRoom: (state, action) => {
            state.room.users = [];
            state.room.name = "";
        }
    }
});

export const { updateUser, removeUser, updateRoom,removeRoom,updateRoomCards } = userSlice.actions;

export default userSlice.reducer;
  