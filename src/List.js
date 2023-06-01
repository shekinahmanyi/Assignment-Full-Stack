import React from 'react'

function List() {
const students = [
    {id:1,name:"Clodia",present:true},
    {id:2,name:"Romaric",present:false},
    {id:3,name:"Ida Nen",present:true},
]

  return (
    <div>
      {students.map((student) => (
        <h3>{student.name}</h3>
      )
      )}
    </div>
  )
}

export default List
