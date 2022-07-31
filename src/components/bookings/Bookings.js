import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingsList,
  fetchBookings,
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
  const bookings = useSelector(bookingsList);
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("newest");
  const [filter, setFilter] = useState("");

  const [bookingsState, setBookingsState] = useState([]);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  useEffect(() => {
    const orderKeys = {
      newest: "order_date",
      guest: "guest_name",
      checkin: "checkin",
      checkout: "checkout",
    };
    const orderedFilterBookings = bookings.filter((booking) =>
      booking.status.includes(filter)
    );
    const orderedFilterSearchBookings = orderedFilterBookings.filter(
      (booking) =>
        booking.guest_name.toLowerCase().includes(query.toLowerCase())
    );
    orderedFilterSearchBookings.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });
    setBookingsState(orderedFilterSearchBookings);
  }, [bookings, order, query, filter]);

  return (
    <Box>
      <BoxSortBookings>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <button onClick={() => setBookingsState(bookings)}>
            All bookings
          </button>
          <button onClick={() => setFilter("checkin")}>Check In</button>
          <button onClick={() => setFilter("checkout")}>Check Out</button>
          <button onClick={() => setFilter("in_progress")}>In progress</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginRight: 45,
          }}
        >
          <button
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
          </button>
          <select
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
            <option value="newest">Newest</option>
            <option value="guest">Guest</option>
            <option value="checkin">Check In</option>
            <option value="checkout">Check Out</option>
          </select>
          <Input
            type="text"
            placeholder="Search Guest"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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
