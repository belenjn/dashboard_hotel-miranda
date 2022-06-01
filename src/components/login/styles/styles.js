import styled from "styled-components";

import { Box, ButtonHome, Title } from "../../../styles/styles";

export const TitleLogin = styled(Title)`
  margin-top: 120px;
  font-size: 50px;
  font-weight: 600;
  padding: 25px;

  @media only screen and (min-width: 1000px) {
    padding: 30px;
  }
`;

export const SubTitleLogin = styled.h3`
  color: #5d5449;
  font-weight: 300;
  margin: auto;
  margin-bottom: 30px;
  text-align: center;
`;

export const BoxImages = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 80%;
  margin: auto;

  @media only screen and (min-width: 1000px) {
    width: 25%;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 25px;

  @media only screen and (min-width: 1000px) {
    padding: 30px;
  }

  label {
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #135846;
    background-color: white;
    color: black;
  }
`;

export const ButtonSendForm = styled(ButtonHome)`
  background-color: #135846;
  color: white;
  margin-top: 10px;

  &:hover {
    background-color: #5ad07a;
    color: black;
    border: 1px solid #135846;
    transition: 0.5s ease;
  }
`;

export const BoxWithOtherBckg = styled.div`
background-color: #EBF1EF;


`