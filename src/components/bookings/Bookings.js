import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingsList,
  // deleteBooking,
  fetchBookings,
  // getBooking,
  // newBooking,
  // updateBooking,
} from "../../features/bookings/bookingsSlice";
import { Box, ButtonProgress, TableDivBookings } from "../../styles/styles";
import {

  StatusAvailable,
  StatusBooked,
  
} from "../rooms/Rooms";



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
