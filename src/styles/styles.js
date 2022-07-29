import styled from "styled-components";
import { StatusAvailable } from "../components/rooms/Rooms";



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


export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin-top: 20px;
`;


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

export const ButtonProgress = styled(StatusAvailable)`
  background-color: #ff9c3a;
`;

export const BoxArchivedContacts = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 20px;
  width: 100%;
  height: 70px;

  button {
    border: none;
    background: none;
    color: #135846;
    font-size: 16px;
    padding: 7px;
    margin-right: 80px;
    width: 300px;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #135846;
    }
  }
`;

export const BoxSortRooms = styled(BoxArchivedContacts)`
  width: 100%;
  margin-left: 40px;
`;


export const ActiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #5ad07a;
`;

export const InactiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #e23428;
`;

export const Input = styled.input`
  border-color: #135846;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  text-align: center;
  margin: auto;
`;

export const NewEmployeeButton = styled.button`
  background-color: "#135846";
  border-radius: 12;
  border: none;
  color: white;
  fontsize: 14;
  height: 55;
  margin: auto;
  margin-right: 10;
  width: 200;
`;

export const TableDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  margin: auto;
  margin-top: 30px;
  width: 95%;

  .categories {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    margin-left: -10px;
  }

  thead {
    width: 1300px;
  }

  thead tr {
    display: grid;
    grid-template-column: repeat(3, 1fr);
    font-size: 20px;
    text-align: center;
  }

  tr {
    display: flex;
    justify-content: space-betweeen;
    width: 100%;
  }

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    padding: 15px;
  }

  .text__customer,
  .text__id {
    text-align: center;
  }

  .title__id {
    display: grid;
    grid-column: 1;
  }

  .title__customer {
    display: grid;
    grid-column: 2;
  }

  .title__comment {
    display: grid;
    grid-column: 3;
  }

  .title__archived {
    display: grid;
    grid-column: 4;
  }

  .info {
    padding: 5px;
  }
  th {
    padding: 10px;
  }

  tbody {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const BoxForMessages = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  width: 70%;
`;

export const BoxContactsMessages = styled.div`
  background-color: white;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 431px;
  height: 275px;

  div > p {
    padding: 25px;
    color: #4e4e4e;
    text-align: left;
    font-size: 16px;
  }

  div > h5 {
    color: #262626;
    text-align: left;
    font-size: 16px;
  }

  div > h6 {
    color: #799283;
    font-size: 14px;
    font-weight: 300;
  }

  .image__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ImageContacts = styled.div`
  background-color: #c5c5c5;
  border-radius: 8px;
  width: 56px;
  height: 56px;
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: right;
  margin: auto;
  width: 120px;

  .error__icon {
    color: red;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .check__icon {
    color: #5ad07a;
    width: 28px;
    height: 24px;
  }
`;


export const TableDivRooms = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  margin: auto;
  margin-top: 30px;
  width: 100%;

  thead {
    width: 1300px;
  }

  thead tr {
    display: grid;
    grid-template-column: repeat(6, 1fr);
    font-size: 20px;
    text-align: center;
    gap: 60px;
  }

  tr {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .text {
    justify-content: center;

    td {
      margin: auto;
    }
  }

  .title__name {
    display: grid;
    grid-column: 1;
  }

  .title__bedType {
    display: grid;
    grid-column: 2;
  }

  .title__facilities {
    display: grid;
    grid-column: 3;
  }

  .title__rate {
    display: grid;
    grid-column: 4;
  }

  .title__offer {
    display: grid;
    grid-column: 5;
  }

  .title__status {
    display: grid;
    grid-column: 6;
  }

  th {
    padding: 5px;
    margin-bottom: 20px;
    width: 85%;
  }

  tbody {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .room__info {
    text-align: center;

    #id {
      color: #799283;
    }

    span {
      margin: auto;
      font-size: 14px;
    }
  }

  .facilities__info {
    text-align: right;
  }

  .categories {
    display: flex;
    justify-content: space-between;
    width: 135%;
    margin: auto;
    margin-left: 20px;
  }
  #price {
    text-align: right;
  }
`;

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
    width: 170%;
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

export const BoxSortBookings = styled(BoxSortRooms)`
  width: 100%;
  display: flex;
`;
