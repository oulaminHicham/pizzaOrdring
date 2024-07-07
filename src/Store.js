import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./featurs/user/userSlice";
import cartReducer from "./featurs/cart/cartSlice";

const store = configureStore({
    reducer:{
        user:userReducer ,
        cart:cartReducer
    },
})

export default store ;