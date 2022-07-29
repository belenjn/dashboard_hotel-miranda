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

import { authContext } from "../../App";
import { loginAuth } from "../../fetchData";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginAuth(user, password);

    if (token) {
      dispatchAuthenticated({ type: "login", user: userData });
      localStorage.setItem("token", token);
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
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password</label>
        <input
          name="pass"
          type="password"
          placeholder="Insert your password"
          data-cy="password-input"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <ButtonSendForm data-cy="submit" type="submit">
          Sign in
        </ButtonSendForm>
      </FormLogin>
    </BoxWithOtherBckg>
  );
};
