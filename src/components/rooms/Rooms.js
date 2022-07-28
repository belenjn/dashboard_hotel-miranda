import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { Box } from "../../styles/styles";

import image from "./assets/no-img.jpg";
import { BoxArchivedContacts } from "../contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRooms,
 
  roomsList,
} from "../../features/rooms/roomsSlice";
import styled from "styled-components";

export const BoxSortRooms = styled(BoxArchivedContacts)`
  width: 600px;
  margin-left: 40px;
`;

export const TableDivRooms = styled.table`
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
    width: 95%;
    margin: auto;
  }
  #price {
    text-align: right;

  }
`;

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

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <Box>
      
      {/* <BoxSortRooms>
        <button>All rooms</button>
        <button>State</button>
        <button>Price</button>
      </BoxSortRooms> */}

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

        {rooms.map((room) => (
          < div key={room._id} >
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
