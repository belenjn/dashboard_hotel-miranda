import styled from "styled-components";

import { Box, ButtonHome, Title } from "../../../styles/styles";

export const TitleLogin = styled(Title)`

    margin-top: 120px;
    font-size: 50px;
    font-weight: 600;
    padding: 30px;
  
`;

export const SubTitleLogin = styled.h3`
  color: #5d5449;
  font-weight: 300;
  margin: auto;
  margin-top: -20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const BoxImages = styled(Box)`
  display: flex;
  background-color: transparent;
  justify-content: center;
  flex-direction: row;
  width: 25%;
  margin: auto;

 
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  padding: 30px;

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
  border: none;
  border-radius: 8px;
  color: white;
  margin: auto;
  width: 158px;
  height: 47px;

  &:hover {
    background-color: #5ad07a;
    color: black;
    transition: 0.5s ease;
  }
`;

export const BoxWithOtherBckg = styled.div`
  background-color: #ebf1ef;
`;
