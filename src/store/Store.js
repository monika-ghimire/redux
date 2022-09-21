import { configureStore } from "@reduxjs/toolkit";
import  studentReducer from "../Reducers/studentSlice";

export default configureStore({
  reducer: {
     student:  studentReducer
  }
});
