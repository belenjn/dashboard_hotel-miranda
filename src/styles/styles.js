import styled from "styled-components";
import { BoxSortRooms, StatusAvailable, TableDivRooms } from "../components/rooms/Rooms";

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
      justify-content: space-between;
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


/* Bookings styles */


export const TableDivBookings = styled(TableDivRooms)`
margin-top: 30px;

  thead tr {
    display: grid;
    grid-template-column: repeat(7, 1fr);
    font-size: 20px;
    text-align: center;
  }

  .categories {
    display: flex;
    justify-content: space-between;
    width: 115%;
    margin: auto;
    margin-left: 20px;
  }
  .text {
    display: flex;
    margin: auto;
    width: 100%;
  }

  .text {
  font-size: 14px;

  }

  td {
    text-align: center;
  }

  .text {
    justify-content: center;
    margin: 0 !important;
  }

  .title__guest {
    display: grid;
    grid-column: 1;
    font-size: 20px;

  }

  .title__orderDate {
    display: grid;
    grid-column: 2;
    font-size: 20px;

  }

  .title__checkIn {
    display: grid;
    grid-column: 3;
    font-size: 20px;

  }

  .title__checkOut {
    display: grid;
    grid-column: 4;
    font-size: 20px;

  }

  .title__special {
    display: grid;
    grid-column: 5;
    font-size: 20px;

  }

  .title__roomType {
    display: grid;
    grid-column: 6;
    font-size: 20px;

  }

  .title__status {
    display: grid;
    grid-column: 6;
    font-size: 20px;

  }

  tbody {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  th {
    padding: 5px;
    margin: auto;
    width: 100%;
  }
`;


export const BoxSortBookings = styled(BoxSortRooms)`
  width: 850px;
`;

export const ButtonProgress = styled(StatusAvailable)`
  background-color: #ff9c3a;
`;


/* Users Styles */

export const TableDivUsers = styled(TableDivBookings)`
  margin-top: 30px;

  thead tr {
    display: grid;
    grid-template-column: repeat(5, 1fr);
    font-size: 20px;
    text-align: center;
  }

  .text {
    display: flex;
    font-size: 15px;
    margin: 0 !important;
    width: 100%;

    .booking__info {
      span {
        text-algin: center;
      }
    }
  }

  .categories {
    display: flex;
    justify-content: space-between;
    width: 165%;
    margin: auto;
    margin-bottom: 30px;
  }

  td {
    text-align: center;
  }

  .text {
    justify-content: center;
    margin: 0 !important;
    font-size: 14px;
  }

  .title__name {
    display: grid;
    grid-column: 1;
    font-size: 20px;
  }

  .title__startDate {
    display: grid;
    grid-column: 2;
    font-size: 20px;
  }

  .title__description {
    display: grid;
    grid-column: 3;
    font-size: 20px;
  }

  .title__contact {
    display: grid;
    grid-column: 4;
    font-size: 20px;
  }

  .title__status {
    display: grid;
    grid-column: 5;
    font-size: 20px;
  }

  tbody {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  th {
    padding: 5px;
    margin: auto;
    width: 100%;
  }
`;

export const ActiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #5ad07a;
`;

export const InactiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #e23428;
`;