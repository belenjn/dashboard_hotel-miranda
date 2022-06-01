import React from "react";
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

export const Login = () => {
  return (
    <BoxWithOtherBckg>
      <TitleLogin>travl</TitleLogin>
      <SubTitleLogin>Hotel Admin Dashboard</SubTitleLogin>
      <BoxImages>
        <SecondLogoHotel />

        <LogoHotel />
      </BoxImages>
      <FormLogin>
        <label form="name_user">User</label>
        <input name="user" placeholder="Insert your user" type="text" />
        <label form="pass">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Insert your password"
        />
        <ButtonSendForm type="submit">Enter</ButtonSendForm>
      </FormLogin>
    </BoxWithOtherBckg>
  );
};
