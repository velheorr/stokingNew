import {configureStore} from "@reduxjs/toolkit";
import app from "./appSlice";
import text from "./textSlice";


const store = configureStore({
	reducer: {app, text},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production',

})

export default store;

