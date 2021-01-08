import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link className="links" to="/homes">
          Home
        </Link>
        <Link className="links" to="/products">
          Products
        </Link>
        <Link className="links" to="/contacts">
          Contact
        </Link>
      </nav>
    );
  }
}

export default Navigation;
