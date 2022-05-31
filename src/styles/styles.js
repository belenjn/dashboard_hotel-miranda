import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #00000005;
  border: none;
  color: #333;
  display: flex;
  justify-content: right;
  height: 60px;
  width: 100%;

  a {
    display: inline-block;
    text-decoration: none;
    color: #333;
    margin-right: 40px;
    margin-top: 8px;
    height: 15px;
    padding: 10px;

    &:hover {
      background-color: #333;
      color: white;
      cursor: pointer;
      border-radius: 3px;
      transition: 0.3s ease;
      height: 25px;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
