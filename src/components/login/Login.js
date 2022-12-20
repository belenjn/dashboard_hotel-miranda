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
import { loginAuth } from "../../apiFunctions";

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
  const [user, setUser] = useState("belen@miranda.com");
  const [password, setPassword] = useState("123456");

  const myUser = {
    name: "Belen JN",
    email: "belen@miranda.com",
    password: "123456",
  };

  const userData = {
    userName: myUser.name,
    userEmail: myUser.email,
  };

  const { dispatchAuthenticated } = useContext(authContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user === myUser.email && password === myUser.password) {
      dispatchAuthenticated({ type: "login", user: userData });
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
          type="text"
          data-cy="user-input"
          value={user}
          required
        />
        <label>Password</label>
        <input
          name="pass"
          type="password"
          value={password}
          data-cy="password-input"
          required
        />

        <ButtonSendForm data-cy="submit" type="submit">
          Sign in
        </ButtonSendForm>
      </FormLogin>
    </BoxWithOtherBckg>
  );
};
