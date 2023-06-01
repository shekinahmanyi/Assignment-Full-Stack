import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddStudent = (props) => {
    const [matriculation,setMatriculation] = useState("")
    const [name,setName] = useState("")
    const [present,setPresent] = useState("false")

const onSubmit = (e) => {
    e.preventDefault()
    if(!matriculation || !name) {
        alert('please fill all the fields')
        return
    }
    props.onAdd({ matriculation,name,present})
    setMatriculation('')
    setName('')
    setPresent(false)
}

  return (
    <div>
      <form className='add-form' onSubmit={onSubmit}>
       <div className='form-control'>
        <label>Matriculation</label>
        <input
        type='text'
        placeholder='matriculation'
        value={matriculation}
        onChange={(e) => setMatriculation(e.target.value)}
        />
       </div>
       <div className='form-control'>
        <label>Name</label>
        <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
       </div>
       <div className='form-control'>
        <label>Present</label>
        <input
        type='text'
        placeholder='present'
        value={present}
        onChange={(e) => setPresent(e.target.value)}
        />
       </div>
      </form>
    </div>
  )
}
AddStudent.defaultProps = {
    
  };
  AddStudent.propTypes = {
    text: PropTypes.string.isRequired,
  
  };

export default AddStudent
