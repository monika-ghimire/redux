
import { useSelector, useDispatch } from "react-redux";

import { addstudent, addString, selectstudentList } from "./Reducers/studentSlice";

export default function App() {
  const  studentList = useSelector(selectstudentList);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> student data</h1>


      { studentList.map((data) => (
        <div>
          <h1>Student_Name: {data.name}</h1>
          <p>Id:{data.id}</p>
        </div>
      ))}
    </div>
  );
}
