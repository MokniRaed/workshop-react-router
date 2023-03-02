import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({Login,auth}) {
  const navItems = ["home", "admin", "categories", "products"];

  const navigate = useNavigate();

  const handleClick = (path) => {
    
    navigate("/" + path);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin:'50px' }}>
      <div>
        {navItems.map((item) => (
          <button onClick={() => handleClick(item)}>{item}</button>
        ))}
      </div>
      <div>
        <h2>Status: </h2>
        <h2 style={{ fontStyle: "bold" }}> { auth ? "Connected" : "Not Connected"}</h2>
        <button onClick={()=> Login()} >{ auth ? "Log out" : "Login"}</button>
      </div>
    </div>
  );
}

export default NavBar;
