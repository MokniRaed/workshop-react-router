import React from 'react'
import { useLocation  } from 'react-router-dom'

function PrivateRouter({children, isauth }) {

    const  location = useLocation() 


  return (
    <div>
      {isauth ? children : <h1>mechy l {location.pathname} ? 🫥yabta .. bara enzel 3al felsa :p</h1> } 
    </div>
  )
}

export default PrivateRouter
