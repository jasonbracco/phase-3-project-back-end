import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "15px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  textAlign: "center"
};

function NavBar() {
    return ( 
      <div>
          <NavLink
              to="/"
              style={linkStyles}
              background= "darkblue"
          >
              Home
          </NavLink>
          <NavLink
              to="/shoelist"
              style={linkStyles}
              background= "darkblue"
          >
              Shoes
          </NavLink>
          <NavLink
              to="/addshoe"
              style={linkStyles}
              background= "darkblue"  
          >
              Create a Shoe
          </NavLink>
          <NavLink
              to="/listbybrand"
              style={linkStyles}
              background= "darkblue"  
          >
              Sort your Shoes
          </NavLink>
      </div>
    );
  }
  
  export default NavBar;