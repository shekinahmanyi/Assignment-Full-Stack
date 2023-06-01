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
      
    </div>
  )
}

export default AddStudent
