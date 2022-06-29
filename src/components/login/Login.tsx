import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  BoxImages,
  BoxWithOtherBckg,
  ButtonSendForm,
  FormLogin,
  SubTitleLogin,
} from "./styles/styles";

import { TitleLogin } from "./styles/styles";

import logo from "./assets/llave-del-hotel.png";
import bed from "./assets/hotel.png";

import Swal from "sweetalert2";
import { authContext } from "../../App";

export const LogoHotel = styled.div`
  background-image: url(${logo});
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  margin-top: 10px;
  height: 120px;
  width: 120px;
`;

export const SecondLogoHotel = styled(LogoHotel)`
  background-image: url(${bed});
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;

export const Login = () => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    username: user,
    password: password,
    userEmail: "belen@hotelmiranda.com",
  };

  const { dispatchAuthenticated } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "belen" && password === "1234") {
      dispatchAuthenticated({ type: "login", user: userData });
    } else if (password !== "1234") {
      Swal.fire({
        title: "Invalid Password",
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#135846",
      });
    } else if (user !== "belen") {
      Swal.fire({
        title: "Invalid User",
        icon: "error",
        confirmButtonText: "Try again",
        confirmButtonColor: "#135846",
      });
    }
  };


  return (
    <BoxWithOtherBckg>
      <TitleLogin>travl</TitleLogin>
      <SubTitleLogin>Hotel Admin Dashboard</SubTitleLogin>
      <BoxImages>
        <SecondLogoHotel />

        <LogoHotel />
      </BoxImages>
      <FormLogin onSubmit={handleSubmit}>
        <label>User</label>
        <input
          name="uname"
          placeholder="Insert your username"
          type="text"
          data-cy="user-input"
          required
          onChange={(e): any => setUser(e.target.value)}
        />
        <label>Password</label>
        <input
          name="pass"
          type="password"
          placeholder="Insert your password"
          data-cy="password-input"
          required
          onChange={(e): any => setPassword(e.target.value)}
        />

        <ButtonSendForm data-cy="submit" type="submit">
          Sign in
        </ButtonSendForm>
      </FormLogin>
    </BoxWithOtherBckg>
  );
};
