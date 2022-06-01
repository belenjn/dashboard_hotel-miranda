import styled from "styled-components";

/* Nav Styles */
export const Nav = styled.nav`
  background-color: #00000005;
  border: none;
  color: #333;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  margin-bottom: 50px;

  div {
    margin-right: 30px;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: #333;
    margin-right: 40px;
    margin-top: 8px;
    height: 20px;
    padding: 10px;

    &:hover {
      background-color: #333;
      color: white;
      cursor: pointer;
      border-radius: 3px;
      transition: 0.5s ease;
      height: 20px;
    }
  }
`;

export const TitleNav = styled.h1`
  margin-left: 100px;
  margin-top: 10px;
`;

/* Main Title Styles  */

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

/* Pages and buttons Styles   */


export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height:100%
`;

export const ButtonDetails = styled.button`
  background-color: #333;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: auto;
  margin-top: 50px;
  height: 30px;
  width: 100px;

  a {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: grey;
    color: black;
    transition: 0.5s ease;
  }
`;

export const ButtonHome = styled(ButtonDetails)`
  background-color: white;
  border: 1px solid #333;

  a {
    color: #333;
  }

  &:hover {
    background-color: #cdcbcb;
  }
`;

