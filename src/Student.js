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
            checked={student.available}
            onChange={handlePresenceClick}
          />
          <span style={{fontWeight:'bold',color:"blue",marginRight:'1em'}}>{student.name}</span>
          {student.Quantity}
        </span>
        <FaTimes
        style={{color:'red',cursor:'pointer'}}
        onClick= {()=> onDelete(student.id)}
        />
      </h3>
      <p style={{color:'green'}}>Available:yes </p>
    </div>
  );
};

export default Student;
