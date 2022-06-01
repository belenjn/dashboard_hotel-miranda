import React, { useState } from "react";
import styled from "styled-components";
import {
  BoxImages,
  BoxWithOtherBckg,
  ButtonSendForm,
  FormLogin,
  SubTitleLogin,
} from "./styles/styles";

import { TitleLogin } from "./styles/styles";
import {Home} from "../Home";

import logo from "./assets/llave-del-hotel.png";
import bed from "./assets/hotel.png";

import Swal from "sweetalert2";

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const userValidate = [
    {
      username: "belen",
      password: "1234",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    let { uname, pass } = document.forms[0];

    //Busca info del user
    const userData = userValidate.find((user) => user.username === uname.value);

    //Compara la info del user
    if (userData) {
      if (userData.password !== pass.value) {
        //Contraseña inválida
        Swal.fire({
          title: "Error!",
          text: "Invalid Password",
          icon: "error",
          confirmButtonText: "Try again",
        });
      } else {
        setIsSubmitted(true);
      }
    } else {
      //Usuario no encontrado
      Swal.fire({
        title: "Error!",
        text: "Invalid User",
        icon: "error",
        confirmButtonText: "Try again",
      });
    }
  };


  //Login Form
  const renderForm = (
    <FormLogin onSubmit={handleSubmit}>
      <label>User</label>
      <input name="uname" placeholder="Insert your user" type="text" required />
      <label>Password</label>
      <input
        name="pass"
        type="password"
        placeholder="Insert your password"
        required
      />

      <ButtonSendForm type="submit">Enter</ButtonSendForm>
    </FormLogin>
  );

  return (
    <BoxWithOtherBckg>
      <TitleLogin>travl</TitleLogin>
      <SubTitleLogin>Hotel Admin Dashboard</SubTitleLogin>
      <BoxImages>
        <SecondLogoHotel />

        <LogoHotel />
      </BoxImages>

      {isSubmitted
        ? <Home/>
        : renderForm}
    </BoxWithOtherBckg>
  );
};
