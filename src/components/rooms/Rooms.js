import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Title } from "../../styles/styles";

import rooms from "../../database/rooms.json";
import styled from "styled-components";

export const RoomsContainer = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  margin: auto;
  margin-top: 50px;
  height: 100%
  width: 1475px;
`;

export const RoomsContainerNav = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: space-between;
  font-weight: 500;
  font-size: 18px;
  margin: auto;
  height: 65px;
  width: 1200px;

  span {
    margin: auto;
  }
`;

export const RoomsListContainer = styled.div`
  border: 1px solid red;

  li {
    list-style: none;
  }
`;

export const RoomsNamesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;

  .facilities {
    font-size: 16px;
  }
`;

export const Rooms = () => {
  return (
    <Box>
      <Title>Rooms</Title>
      <RoomsContainer>
        <RoomsContainerNav>
          <span>Room Name</span>
          <span>Room Type</span>
          <span>Amenities</span>
          <span>Price</span>
          <span>Offer Price</span>
          <span>Status</span>
        </RoomsContainerNav>
        {rooms.map((room) => (
          <RoomsListContainer key={room.id}>
            <RoomsNamesList>
              <li className="name">{room.room_name}</li>
              <li className="type">{room.bed_type}</li>
              <li className="facilities">{room.facilities}</li>
              <li className="rate">{room.rate}</li>
              <li className="rate">{room.rate}</li>
              <li className="status">{room.status}</li>
            </RoomsNamesList>
          </RoomsListContainer>
        ))}
      </RoomsContainer>

      <Button>
        <Link to="/rooms/id">Details</Link>
      </Button>
    </Box>
  );
};

/*
 TODO: 
 Hacer el mapeo de las rooms y estilos
     */
