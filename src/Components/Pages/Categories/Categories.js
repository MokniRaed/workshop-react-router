import React from 'react'
import { useNavigate } from 'react-router-dom'

function Categories() {
  const navigate = useNavigate()

 
  return (
    <div style={{ padding:'20px' ,border: '2px solid red'}}>
    <h1>Categories</h1>
    <button onClick={() => navigate(-1)} > Return </button>
  
    
  </div>
  )
}

export default Categories
