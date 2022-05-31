import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../styles/styles";

export const Navbar = () => {
  return (
    <Nav>
      <Link to="/bookings"> Bookings </Link>
      <Link to="/rooms"> Rooms </Link>
      <Link to="/contacts"> Contacts </Link>
      <Link to="/users"> Users </Link>
    </Nav>
  );
};
