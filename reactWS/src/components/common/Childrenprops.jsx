import React from 'react'

export default function Childrenprops({normalprop, children }) {
  return (
    <div>
        <h1>difference between custom props and children props </h1>
        {normalprop}
        <h2>children is fixed keyword for the children props</h2>
        {children}
    </div>
  )
}
