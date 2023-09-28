import { configureStore } from "@reduxjs/toolkit";
import getInfo from "./slice/infoSlice";
export const store =configureStore({
    reducer :{
        getInfo
    }
})