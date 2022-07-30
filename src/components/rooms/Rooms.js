import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Box, BoxSortRooms, TableDivRooms } from "../../styles/styles";

import image from "./assets/no-img.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms, roomsList } from "../../features/rooms/roomsSlice";
import styled from "styled-components";

export const Image = styled.div`
  background-image: url(${image});
  border-radius: 8px;
  width: 150px;
  height: 77px;
`;

export const StatusAvailable = styled.button`
  background-color: #5ad07a;
  border-radius: 12px;
  border: none;
  color: white;
  margin: auto;
  width: 125px;
  height: 48px;
`;

export const StatusBooked = styled(StatusAvailable)`
  background-color: #e23428;
`;

export const Rooms = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(roomsList);

  const [roomsState, setRoomsState] = useState([]);
  const [order, setOrder] = useState("room_number");

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {

    // const orderedRooms = rooms.filter(room => room.room_number);

    // orderedRooms.sort((a,b) => {
    //   if(a.room_number < b.room_number) {
    //     return -1
    //   } else if(a.room_number > b.room_number) {
    //     return 1
    //   } else {
    //     return 0
    //   }
    // })

    setRoomsState(rooms);
  }, [rooms, order]);

  return (
    <Box>
      <BoxSortRooms>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <button onClick={() => setRoomsState(rooms)}>All rooms</button>
          <button onClick={() => setRoomsState(rooms.filter(room => room.offer === true))}>Available</button>
          <button onClick={() => setRoomsState(rooms.filter(room => room.offer === false))}>Booked</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            width: "20%",
          }}
        >
          {/* <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            style={{
              border: "2px solid #135846",
              color: "#135846",
              borderRadius: 12,
              height: 55,
              width: 130,
              textAlign: "center",
              margin: "auto",
              fontSize: 14,
            }}
          >
            <option>Room Number</option>
            <option>Price -</option>
            <option>Price +</option>
          </select> */}
        </div>
      </BoxSortRooms>

      <TableDivRooms>
        <thead>
          <tr className="categories">
            <th className="title__name">Room</th>{" "}
            <th className="title__bedType">Bed Type</th>
            <th className="title__facilities">Facilities</th>
            <th className="title__rate">Rate</th>
            <th className="title__offer">Offer Price</th>
            <th className="title__status">Status</th>
          </tr>
        </thead>

        {roomsState.map((room) => (
          <div key={room._id}>
            <tbody className="column__id">
              <tr className="text">
                <div
                  style={{
                    backgroundImage: `url(${room.images[0]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 8,
                    width: 150,
                    height: 65,
                  }}
                ></div>
              </tr>

              <tr className="text">
                <td>
                  {room.bed_type === "single_bed"
                    ? "Single Bed"
                    : room.bed_type === "double_superior"
                    ? "Double Superior"
                    : room.bed_type === "double_bed"
                    ? "Double Bed"
                    : "Suite"}
                </td>
              </tr>

              <tr className="text">
                <td className="facilities__info">{room.amenities}</td>
              </tr>

              <tr className="text">
                <td id="price">{room.price}</td>
              </tr>

              <tr className="text" id="price">
                <td id="price">{room.price}</td>
              </tr>

              <tr className="text">
                <td>
                  {room.offer === false ? (
                    <StatusBooked>Booked</StatusBooked>
                  ) : (
                    <StatusAvailable>Available</StatusAvailable>
                  )}
                </td>
              </tr>
            </tbody>
          </div>
        ))}
      </TableDivRooms>
      {/* <Button>
        <Link to="/rooms/id">Details</Link>
      </Button> */}
    </Box>
  );
};
