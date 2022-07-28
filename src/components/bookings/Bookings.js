import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  bookingsList,
  // deleteBooking,
  fetchBookings,
  // getBooking,
  // newBooking,
  // updateBooking,
} from "../../features/bookings/bookingsSlice";
import { Box } from "../../styles/styles";
import {
  BoxSortRooms,
  StatusAvailable,
  StatusBooked,
  TableDivRooms,
} from "../rooms/Rooms";


export const TableDivBookings = styled(TableDivRooms)`
margin-top: 30px;

  thead tr {
    display: grid;
    grid-template-column: repeat(7, 1fr);
    font-size: 20px;
    text-align: center;
  }

  .categories {
    width: 95%;
    margin: auto;
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


export const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(bookingsList);

  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  return (
    <Box>
   
      {/* <BoxSortBookings>
        <button>All bookings</button>
        <button>Check In</button>
        <button>Check Out</button>
        <button>In progress</button>
      </BoxSortBookings> */}

      <TableDivBookings>
        <thead>
          <tr className="categories">
            <th className="title__guest">Guest</th>{" "}
            <th className="title__orderDate">Order Date</th>
            <th className="title__checkIn">Check in</th>
            <th className="title__checkOut">Check Out</th>
            <th className="title__special">Special Request</th>
            <th className="title__status">Status</th>
          </tr>
    
        </thead>

        {bookings.map((booking) => (
          <>
            <tbody key={booking._id} className="column__id">
              <tr className="text">
                <td className="booking__info">
                  <span>{booking.guest_name}</span>
                  <br />
                  <span>{booking._id}</span>
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
                    {new Date(booking.checkin).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {new Date(booking.checkout).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>{booking.special_request}</span>
                </td>
              </tr>

              <tr className="text">
                <td>
                  {booking.status === "checkout" && (
                    <StatusBooked>Check Out</StatusBooked>
                  )}
                  {booking.status === "checkin" && (
                    <StatusAvailable>Check In</StatusAvailable>
                  )}
                  {booking.status === "in_progress" && (
                    <ButtonProgress>In Progress</ButtonProgress>
                  )}
                </td>
              </tr>

            </tbody>
          </>
        ))}
      </TableDivBookings>
{/* 
      <Button>
        <Link to="/bookings/id">Details</Link>
      </Button> */}
    </Box>
  );
};
