import React from 'react'

export default function Studentcard({name, age, grade}) {
  return (
    <>
    <h1>Student Name:{name}</h1> 
    <h2>AGE :{age}</h2>
    <p>Grade: {grade}</p>
    </>
  )
}
