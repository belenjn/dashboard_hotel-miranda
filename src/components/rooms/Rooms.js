import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Title } from "../../styles/styles";

import rooms from "../../database/rooms.json";
import styled from "styled-components";

import image from "./assets/no-img.jpg";

export const RoomsContainerNav = styled.div`
  @media only screen and (min-width: 1000px) {
    border-radius: 5px;
    background-color: #ffffff;
    display: flex;
    flex-direction: space-between;
    font-weight: 500;
    font-size: 18px;
    margin: auto;
    height: 65px;
    width: 100%;

    span {
      margin: auto;
    }
  }
`;

export const RoomsListContainer = styled.div`
  @media only screen and (min-width: 1000px) {
    border: 1px solid red;
    border-radius: 20px;
    background-color: #ffffff;
    display: grid;
    margin: auto;
    margin-top: 50px;
    grid-template-columns: repeat(6, 1fr);
    width: 95%;
    height: 2000px;
  }
`;

export const NoImage = styled.div`
  @media only screen and (min-width: 1000px) {
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    height: 77px;
    width: 150px;
  }
`;

export const RoomsNamesList = styled.div`
  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    height: 2000px;

    h6 {
      text-align: center;
    }
  }
`;

export const ImagesAndText = styled.div`
  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

export const Text = styled.div`
  @media only screen and (min-width: 1000px) {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 77px;
    width: 150px;

    h6 {
      font-size: 14px;
      color: #799283;
      font-weight: 300;
      margin-top: 10px;
    }

    h4 {
      text-align: center;
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
export const RoomsTypeList = styled(RoomsNamesList)`
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
  }
`;

export const RoomsAmenitiesList = styled(RoomsNamesList)`
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const RoomTypes = styled(Text)`
  text-align: center;
  font-weight: 300;
  margin: auto;
`;

export const Amenities = styled.p`
  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 300;
    margin: auto;
  }
`;

export const RoomsPriceContainer = styled(RoomsNamesList)`
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Prices = styled(Text)`
  text-align: center;
  font-weight: 300;
  margin: auto;
`;

export const RoomsStatusContainer = styled(RoomsNamesList)`
  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    justify-content: space-between;
  }
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
  return (
    <Box>
      <Title>Rooms</Title>
      {/* <RoomsContainerNav>
          <span>Room Name</span>
          <span>Room Type</span>
          <span>Amenities</span>
          <span>Price</span>
          <span>Offer Price</span>
          <span>Status</span>
        </RoomsContainerNav> */}
      <RoomsListContainer>
        <RoomsNamesList>
          {rooms.map((room) => (
            <ImagesAndText>
              <NoImage />
              <Text>
                <h6># {room.id}</h6>
                <h4>{room.room_name}</h4>
              </Text>
            </ImagesAndText>
          ))}
        </RoomsNamesList>
        <RoomsTypeList>
          {rooms.map((room) => (
            <RoomTypes>{room.bed_type}</RoomTypes>
          ))}
        </RoomsTypeList>
        <RoomsAmenitiesList>
          {rooms.map((room) => (
            <Amenities>{room.facilities}</Amenities>
          ))}
        </RoomsAmenitiesList>
        <RoomsPriceContainer>
          {rooms.map((room) => (
            <Prices>{room.rate}</Prices>
          ))}
        </RoomsPriceContainer>
        <RoomsPriceContainer>
          {rooms.map((room) => (
            <Prices>{room.rate}</Prices>
            // Aquí irían los precios con descuento
          ))}
        </RoomsPriceContainer>
        <RoomsStatusContainer>
          {rooms.map((room) =>
            room.status === "true" ? (
              <StatusAvailable>Available</StatusAvailable>
            ) : (
              <StatusBooked>Booked</StatusBooked>
            )
          )}
        </RoomsStatusContainer>
      </RoomsListContainer>

      <Button>
        <Link to="/rooms/id">Details</Link>
      </Button>
    </Box>
  );
};
