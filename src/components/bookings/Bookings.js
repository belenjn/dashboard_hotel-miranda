import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allBookings,
  getBookings,
} from "../../features/bookings/bookingsSlice";
import {
  Box,
  BoxSortBookings,
  ButtonProgress,
  Input,
  TableDivBookings,
} from "../../styles/styles";
import { StatusAvailable, StatusBooked } from "../rooms/Rooms";

export const Bookings = () => {
  const dispatch = useDispatch();
  const bookings = useSelector(allBookings);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const [filter, setFilter] = useState("");

  const [bookingsState, setBookingsState] = useState(bookings);
  const checkIn = bookings.filter((booking) => booking.status === "Check In");
  const checkOut = bookings.filter((booking) => booking.status === "Check Out");
  const inProgress = bookings.filter(
    (booking) => booking.status === "In Progress"
  );

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
    dispatch(getBookings());
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginRight: 45,
          }}
        >
          {/* <button
            style={{
              backgroundColor: "#135846",
              borderRadius: 12,
              border: "none",
              color: "white",
              fontSize: 14,
              margin: "auto",
              marginRight: 20,
              height: 55,
              width: 120,
            }}
          >
            New Booking
          </button> */}
          {/* <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            style={{
              borderColor: "#135846",
              color: "#135846",
              borderRadius: 12,
              height: 55,
              width: 120,
              textAlign: "center",
              margin: "auto",
              fontSize: 14,
            }}
          >
            <option>Newest</option>
            <option>Guest</option>
            <option>Check In</option>
            <option>Check Out</option>
          </select> */}
          {/* <Input type="text" placeholder="Search Guest" /> */}
        </div>
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

        {query ? (
          <h2
            style={{
              textAlign: "center",
              color: "red",
              opacity: "0.30",
              width: "20%",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            Guest not found
          </h2>
        ) : (
          ""
        )}

        {bookingsState.map((booking) => (
          <tbody key={booking.id} className="column__id">
            <tr className="text">
              <td className="booking__info">
                <span>{booking.fullName}</span>
                <br />
                <span>{booking.id}</span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>{new Date(booking.date).toLocaleString("en-GB")}</span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>{new Date(booking.checkin).toLocaleString("en-GB")}</span>
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
                <span>{booking.specialRequest}</span>
              </td>
            </tr>

            <tr className="text">
              <td>
                {booking.status === "Check Out" && (
                  <StatusBooked>Check Out</StatusBooked>
                )}
                {booking.status === "Check In" && (
                  <StatusAvailable>Check In</StatusAvailable>
                )}
                {booking.status === "In Progress" && (
                  <ButtonProgress>In Progress</ButtonProgress>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </TableDivBookings>
      {/* 
      <Button>
        <Link to="/bookings/id">Details</Link>
      </Button> */}
    </Box>
  );
};
