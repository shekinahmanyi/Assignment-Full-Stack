import React from "react";
import Header from "./Header";
import List from "./List";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddStudent from "./components/AddStudent";

function App() {
  const title = "Class List";
  const [students, setStudents] = useState([
    { id: 1, Matriculation: 'CT22A184', name: "Clodia Delegue", present: true, status: 9/10 },
    { id: 2, Matriculation: 'CT22A023', name: "Romaric", present: false, status: 4/10 },
    { id: 3, Matriculation: 'CT22A257', name: "Ida Nen", present: true, status: 6/10 },
  ]);

  // Add a Student
  const AddOneStudent = (student) => {
    console.log("Student added:", student);
    const id = uuidv4();
    console.log(id);
    const newStudent = { id, status: 1/10, ...student };
    setStudents([...students, newStudent]);
  }

  // Delete Student 
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="container">
      <Header title={title} />
      <AddStudent onAdd={AddOneStudent} />
      {students.length > 0 ? (
        <List students={students} onDelete={deleteStudent} />
      ) : (
        'No student'
      )}
    </div>
  );
}

export default App;
