import React from "react";
import { FaTimes } from "react-icons/fa";

const Student = ({ student, onDelete, onTogglePresence }) => {
  function handlePresenceClick() {
    onTogglePresence(student.id);
  }

  return (
    <div className={`task ${student.present ? "reminder" : ""}`}>
      <h3>
        <span>
          <input
            style={{display:"inline-block",marginRight:'1em'}}
            type="checkbox"
            checked={student.present}
            onChange={handlePresenceClick}
          />
          <span style={{fontWeight:'bold',color:"blue",marginRight:'1em'}}>{student.matriculation}</span>
          {student.name}
        </span>
        <FaTimes
        style={{color:'red',cursor:'pointer'}}
        onClick= {()=> onDelete(student.id)}
        />
      </h3>
      <p style={{color:'green'}}>Status: {student.status}</p>
    </div>
  );
};

export default Student;
