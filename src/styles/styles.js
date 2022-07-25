import styled from "styled-components";

/* Nav Styles */
export const Nav = styled.nav`

  .nav__icons {
    display: none;
  }
    background-color: #ffffff;
    color: #333;
    display: flex;
    justify-content: space-between;
    height: 60px;
    width: 100%;

    div {
      margin-right: 30px;
    }
    .nav__icons {
      display: flex;
      font-size: 25px;
      justify-content: right;
      text-decoration: none;
      color: #135846;
      margin: auto;
      margin-right: 40px;
      height: 30px;
      width: 15%;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        background-color: #333;
        color: white;
        cursor: pointer;
        height: 40px;
        border-radius: 3px;
      }
    }
  
`;

export const TitleNav = styled.h1`
  margin: auto;
  margin-left: 40px;
`;

/* Main Title Styles  */

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin-top: 20px;
`;

/* Box and buttons Styles   */

export const Box = styled.div`
  background-color: #ebebeb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Button = styled.button`
  background-color: #135846;
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
    cursor: pointer;
    background-color: #5ad07a;
    color: white;
    transition: 0.5s ease;
  }
`;

export const ButtonHome = styled(Button)`
  background-color: white;
  border: 1px solid #333;

  a {
    color: #333;
  }

  a:hover {
    color: white;

  }

  &:hover {
    background-color: #135846;
  }
`;
