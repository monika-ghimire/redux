import React, { useState } from 'react';
import UserList from './UserList';


export default function Form() {
   
    const [userList, setUserList] = useState([]);
    let userDetailsList=[]
    const submitForm=(event)=>{
     
        event.preventDefault();
        let userValue=event.target;
        var userData={
           name:userValue[0].value,
          email:userValue[1].value
        }
        userDetailsList.push(userData)
        setUserList((prevList)=>[...prevList,userData])
       
    }



  return (

<>

<div class="container text-center">
    <div class="row align-items-start">
      <div class="col">
      <form onSubmit={submitForm} >
    <div class="mb-3">
      <label  class="form-label">User Name</label>
      <input class="form-control" />
    </div>

    <div class="mb-3">
      <label  class="form-label">Email address</label>
      <input type="email" class="form-control" />
    </div>
   
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
      </div>
      <div class="col">
     
       
        {userList.map((x) => (
       <UserList  name={x.name}  email={x.email}  />
       ))}
      </div>
    
    </div>
   
  </div>
</>
    
   
  )
}
