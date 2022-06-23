import React from "react";
import styled from "styled-components";
import { Box, Title } from "../styles/styles";

import { BiBed } from "react-icons/bi";

export const KpisContainer = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 130px;

  div {
    border-radius: 12px;
    background-color: #ffffff;
    width: 340px;
    height: 125px;

    &:hover {
      cursor: pointer;
      transition: 0.2s ease;
      box-shadow: 0px 16px 30px #00000014;
    }

    .bed__icon {
      color: #e23428;
      width: 28px;
      height: 20px;
      margin: auto;
    }
  }
`;

export const Dashboard = () => {
  return (
    <>
      <Box>
        <Title>Dashboard</Title>
        <KpisContainer>
          <div>
            
            <div style={{
              backgroundColor: "#FFEDEC",
              display: "flex",
              justifyContent: "center",
              height: "65px",
              width: "65px",
            }}>
            <BiBed className="bed__icon" />

            </div>
          </div>
          <div>probando</div>
          <div>probando</div>
          <div>probando</div>
        </KpisContainer>
      </Box>
      <div
        style={{
          width: "100%",
          height: "954px",
          backgroundColor: "#EBEBEB",
        }}
      ></div>
    </>
  );
};
