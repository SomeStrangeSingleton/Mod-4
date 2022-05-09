import React from 'react'
import {useState} from 'react'

function About() {
    const [count,setCount] = useState(0)
  return (
    <div>   
        <h1>About Page</h1>
        <h2>{count}</h2>
        <buttton type='button' onClick={() => setCount(prevCount=> prevCount - 1)} >+</buttton>
      
    </div>
  )
}

export default About