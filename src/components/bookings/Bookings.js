import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  bookingsList,
  deleteBooking,
  fetchBookings,
  getBooking,
  newBooking,
  updateBooking,
} from "../../features/bookings/bookingsSlice";
import { Box, Button, Title } from "../../styles/styles";
import {
  BoxSortRooms,
  StatusAvailable,
  StatusBooked,
  TableDivRooms,
} from "../rooms/Rooms";

export const BoxSortBookings = styled(BoxSortRooms)`
  width: 850px;
`;

export const ButtonProgress = styled(StatusAvailable)`
  background-color: #ff9c3a;
`;

export const TableDivBookings = styled(TableDivRooms)`
  thead tr {
    display: grid;
    grid-template-column: repeat(7, 1fr);
    font-size: 20px;
    text-align: center;
  }

  .categories,
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
    grid-column: 7;
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

export const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(bookingsList);

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  return (
    <Box>
      <Title>Bookings</Title>
   
      <BoxSortBookings>
        <button>All bookings</button>
        <button>Check In</button>
        <button>Check Out</button>
        <button>In progress</button>
      </BoxSortBookings>

      <TableDivBookings>
        <thead>
          <tr className="categories">
            <th className="title__guest">Guest</th>{" "}
            <th className="title__orderDate">Order Date</th>
            <th className="title__checkIn">Check in</th>
            <th className="title__checkOut">Check Out</th>
            <th className="title__special">Special Request</th>
            <th className="title__roomType">Room Type</th>
            <th className="title__status">Status</th>
            {/* El status puede ser en check out, check in o in progress */}
          </tr>
          {/* <button
            onClick={() =>
              dispatch(
                newBooking({
                  id: 200,
                  name_guest: "María Pérez",
                  order_date: "2022-07-19 03:13:41",
                  sales: "2022-07-19 23:00:00",
                  occupancy: "2022-07-29 07:13:21",
                  special_request: "Probando una nueva reserva",
                  room_number: 300,
                  rate: 1205,
                  status: "progress",
                })
              )
            }
          >
            New Room
          </button> */}
        </thead>

        {bookings.map((booking) => (
          <>
            <tbody key={booking.id} className="column__id">
              <tr className="text">
                <td className="booking__info">
                  <span>{booking.name_guest}</span>
                  <br />
                  <span>{booking.id}</span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {new Date(booking.order_date).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {new Date(booking.sales).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {new Date(booking.occupancy).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>{booking.special_request}</span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>{booking.bed_type}</span>
                  <br />
                  <span>Num: {booking.room_number}</span>
                </td>
              </tr>

              <tr className="text">
                <td>
                  {booking.status === "false" && (
                    <StatusBooked>Check Out</StatusBooked>
                  )}
                  {booking.status === "true" && (
                    <StatusAvailable>Check In</StatusAvailable>
                  )}
                  {booking.status === "progress" && (
                    <ButtonProgress>In Progress</ButtonProgress>
                  )}
                </td>
              </tr>

              {/* Botones para ver las funcionalidades en la web
              <tr>
                <button onClick={() => dispatch(deleteBooking(booking))}>
                  Delete room
                </button>
                <button
                  onClick={() =>
                    dispatch(getBooking(booking), console.log(booking))
                  }
                >
                  Get Room
                </button>
                <button
                  onClick={() =>
                    dispatch(updateBooking({ ...booking, status: "false" }))
                  }
                >
                  Update Room
                </button>
              </tr> */}
            </tbody>
          </>
        ))}
      </TableDivBookings>

      <Button>
        <Link to="/bookings/id">Details</Link>
      </Button>
    </Box>
  );
};
