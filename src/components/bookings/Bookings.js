import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingsList,
  fetchBookings,

} from "../../features/bookings/bookingsSlice";
import { Box, BoxSortBookings, ButtonProgress, TableDivBookings } from "../../styles/styles";
import {

  StatusAvailable,
  StatusBooked,
  
} from "../rooms/Rooms";



export const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(bookingsList);


  const [bookingsState, setBookingsState] = useState(bookings);

  const checkIn = bookings.filter((booking) => booking.status === "checkin");
  const checkOut = bookings.filter((booking) => booking.status === "checkout");
  const inProgress = bookings.filter((booking) => booking.status === "in_progress");

  const handleClickAllBookings = () => {
    setBookingsState(bookings);
  };

  const handleClickCheckIn = () => {
    setBookingsState(checkIn);

  };

  const handleClickCheckOut = () => {
    setBookingsState(checkOut);

  };


  const handleClickInProgress = () => {
    setBookingsState(inProgress);

  };
  useEffect(() => {
    dispatch(fetchBookings());
  }, []);


  useEffect(() => {
    setBookingsState(bookings);
  }, [bookings]);


  return (
    <Box>
   
      <BoxSortBookings>
        <button onClick={handleClickAllBookings}>All bookings</button>
        <button onClick={handleClickCheckIn}>Check In</button>
        <button onClick={handleClickCheckOut}>Check Out</button>
        <button onClick={handleClickInProgress}>In progress</button>
      </BoxSortBookings> 

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

        {bookingsState.map((booking) => (
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
