import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    studentname: "Suraj",
     student: [
      { name: "Suraj", id:1 },
      {name: "Salu", id:2  },
      {name: "Suraj", id:3  }
    ]
  },
  reducers: {
    addString:(state) => {
      state.studentname + "name";
    },
    addProduct:(state) => {
      state.student.push({ name:"monika",id:4 });
    }
  }

});
 
export const { addString, addProduct } = studentSlice.actions;
export const selectstudentList = (state) => state.student.student;
export const selectstudentname = (state) => state.studentname;

export default studentSlice.reducer;
