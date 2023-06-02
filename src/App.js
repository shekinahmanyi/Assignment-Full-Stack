import React from "react";
import Header from "./Header";
import List from "./List";
import { useState } from "react";


function App() {
  const title = "Product";
  const [students, setStudents] = useState([
    { id: 1, name: "Peanut", available: false, Quantity:10 },
    { id: 2,  name: "Chin-Chin", available: true, Quantity:9 },
    { id: 3, name: "Groundnut", available: true, Quantity: 6 },
    { id: 4, name: "GroundnutSweet", available: false, Quantity: 8 },
  ]);


  // Delete Student 
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }

  //Toggle Student Present or Absent
  const onTogglePresence = (id) => {

    setStudents(students.map((student) => {
      if (student.id === id) {
        return { ...student, present: !student.present };
      }
      return student;
    }));

  }

  return (
    <div className="container">
      <Header title={title} />
      {students.length > 0 ? (
        <List students={students} onDelete={deleteStudent} onToggle={onTogglePresence}/>
      ) : (
        'No student'
      )}
    </div>
  );
}

export default App;
