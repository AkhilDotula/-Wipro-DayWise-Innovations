//src//redux//store.js
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";  //importing Reducer

const store = configureStore({
    reducer: {
        counter:counterReducer //registering Reducer
    },
});
export default store;