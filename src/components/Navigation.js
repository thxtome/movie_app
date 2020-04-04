import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/about">about</Link>
      <Link to="/">home</Link>
    </div>
  );
}

export default Navigation;
