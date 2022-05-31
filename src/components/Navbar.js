import React from "react";
import { Link } from "react-router-dom";
import { Nav, TitleNav } from "../styles/styles";

export const Navbar = () => {
  return (
    <Nav>
      <TitleNav>Dashboard</TitleNav>

      <div>
        <Link to="/bookings"> Bookings </Link>
        <Link to="/rooms"> Rooms </Link>
        <Link to="/contacts"> Contacts </Link>
        <Link to="/users"> Users </Link>
      </div>
    </Nav>
  );
};
