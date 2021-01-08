import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div style={{ margin: "2em auto 1em auto" }}>
        <nav>
          <NavLink className="links" to="/homes">
            Home
          </NavLink>
          <NavLink className="links" to="/products">
            Products
          </NavLink>
          <NavLink className="links" to="/contacts">
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navigation;
