import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

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

export const Login = ({ authenticated, setAuthenticated }) => {

  let navigate = useNavigate();

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
      localStorage.setItem("authenticated", true);
      setAuthenticated(true);
      navigate("/");

      if (userData.password !== pass.value) {
        //Contraseña inválida
        localStorage.removeItem("authenticated");
        navigate("/login");
        setAuthenticated(false);

        Swal.fire({
          title: "Error!",
          text: "Invalid Password",
          icon: "error",
          confirmButtonText: "Try again",
          

        });
      }
    } else {
      //Usuario no encontrado
      localStorage.removeItem("authenticated");
      setAuthenticated(false);

      navigate("/login");

      Swal.fire({
        title: "Error!",
        text: "Invalid User",
        icon: "error",
        confirmButtonText: "Try again",
        name: "error_user"

      });
    }
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/");
    }
  }, [authenticated, navigate]);

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
        />
        <label>Password</label>
        <input
          name="pass"
          type="password"
          placeholder="Insert your password"
          data-cy="password-input"
          required
        />

        <ButtonSendForm  data-cy="submit"  type="submit">Sign in</ButtonSendForm>
      </FormLogin>
    </BoxWithOtherBckg>
  );
};
