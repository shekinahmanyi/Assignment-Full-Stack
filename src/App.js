import React from "react";
//import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import List from "./List";
import { useState } from "react";

function App() {
  const title = "Class List"
  const [students,setStudents] = useState([
    {id:1,Matriculation:'CT22A184',name:"Clodia Delegue",present:true,status:9/10},
    {id:2,Matriculation:'CT22A023',name:"Romaric",present:false,status:4/10},
    {id:3,Matriculation:'CT22A257',name:"Ida Nen",present:true,status:6/10},
]);
  
//Delete Student 
const deleteStudent = (id) => {
  setStudents(students.filter((student)=>student.id!==id));
}

  return (
    <div className="container">
      <Header title={title}/>
      {students.length>0?
      <List students={students} onDelete={deleteStudent}/>:
      ('No student')}
    </div>
  );
}

export default App;
