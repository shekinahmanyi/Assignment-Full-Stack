import React from "react";
import Student from "./Student";

function List(props) {
  return (
    <>
      {props.students.map((student) => (
        <Student
          Key={student.id}
          student={student}
          onDelete={props.onDelete}
          onTogglePresence={props.onTogglePresence}
        />
      ))}
    </>
  );
}

export default List;
