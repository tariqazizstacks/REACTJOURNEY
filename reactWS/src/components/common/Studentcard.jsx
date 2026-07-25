import React from 'react'
import './Studentcard.css'

export default function Studentcard(props) {
  return (
    <>
 
    <div className="student-card">
      <h1>Student Information</h1>
      <p><strong>Name : </strong> {props.name  } </p>
      <p><strong>Age : </strong> {props.age}</p>
      <p><strong>Course : </strong>{props.course}</p>
    </div>
    <br />
    </>
  );

}
