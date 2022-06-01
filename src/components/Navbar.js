import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav, TitleNav } from "../styles/styles";

import keys from "./login/assets/llave-del-hotel.png";
import avatar from "./assets/avatar.png";

export const AsideMenu = styled.aside`
  // display: none;
  border: 1px solid black;
  top: 0px;
  left: 0px;
  width: 345px;
  height: 1812px;
  // position: absolute; //para cuando salga el menu hamburguesa
`;

export const LogoAsideMenu = styled.div`
  background-image: url(${keys});
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  width: 60px;
  height: 60px;
`;

export const BoxLogoAside = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  margin-bottom: 20px;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  height: 80px;
  width: 200px;
  text-align: left;
  margin-left: -15px;

  h3 {
    font-size: 20px;
  }

  h6 {
    color: #5d5449;

    font-size: 10px;
    font-weight: 300;
  }
`;

export const ListItemsMenu = styled.div`
  ul {
    margin-left: 20px;
    list-style: none;
    li {
      padding: 20px;
    }
  }
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 30px #dcdcdc;
  border-radius: 18px;
  margin: auto;
  margin-top: 20px;
  width: 233px;
  height: 230px;

  h2 {
    font-size: 20px;
    font-weight: 300;
  }
  h6 {
    font-weight: 300;
    font-size: 10px;
    color: #b2b2b2;
  }
  h2,
  h6 {
    text-align: center;
  }
`;

export const IconUser = styled.div`
  background-image: url(${avatar});
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: auto;
  left: 138px;
  width: 70px;
  height: 70px;
`;
export const ButtonEdit = styled.button`
  background-color: #ebf1ef;
  border: none;
  border-radius: 8px;
  color: #135846;
  margin: auto;
  width: 158px;
  height: 47px;

  &:hover {
    cursor: pointer;
    background-color: #135846;
    color: white;
    transition: 0.5s ease;
  }
`;

export const Navbar = ({ authenticated }) => {
  if (authenticated) {
    return (
      <>
        <Nav>
          <TitleNav>Dashboard</TitleNav>

          <div>
            <Link to="/bookings"> Bookings </Link>
            <Link to="/rooms"> Rooms </Link>
            <Link to="/contacts"> Contacts </Link>
            <Link to="/users"> Users </Link>
          </div>
        </Nav>

        <AsideMenu>
          <BoxLogoAside>
            <LogoAsideMenu />
            <BoxText>
              <h3>travl</h3>
              <h6>Hotel Admin Dashboard</h6>
            </BoxText>
          </BoxLogoAside>
          <ListItemsMenu>
            <ul>
              <li>Dashboard</li>
              <li>Bookings</li>
              <li>Rooms</li>
              <li>Contact</li>
              <li>Users</li>
            </ul>
            <BoxUser>
              <IconUser />
              <h2>Belén Jaraba</h2>
              <h6>belen@miranda.com</h6>
              <ButtonEdit>Edit</ButtonEdit>
            </BoxUser>
          </ListItemsMenu>
        </AsideMenu>
      </>
    );
  }
};
