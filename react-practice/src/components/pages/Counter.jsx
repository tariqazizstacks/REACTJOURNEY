import React, { useState } from 'react'
import './Counter.css'
export default function Counter() {
    let [count, setCount]= useState(0);

  return (
 <>
  <div className="container">
  <div className="card">
    <h1 className="title">Counter App</h1>

    <h2 className="count">{count}</h2>

    <div className="btn-group">
      <button
        className="btn increase"
        onClick={() => setCount(count + 1)}
      >
        + Increase
      </button>

      <button
        className="btn decrease"
        onClick={() => setCount(count - 1)}
      >
        − Decrease
      </button>
    </div>
  </div>
</div>


        {/* <h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>
          click to increase count </button>

        <button onClick={()=>setCount(count-1)}> 
          click to decrease count </button> */}

   </>  
  )

}
