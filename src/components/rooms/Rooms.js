import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Title } from "../../styles/styles";

import rooms from "../../database/rooms.json";
import styled from "styled-components";

import image from "./assets/no-img.jpg";

export const RoomsTitleSpan = styled.span`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const RoomsListContainer = styled.div`
  border-radius: 20px;
  background-color: #ffffff;
  display: grid;
  margin: auto;
  margin-top: 50px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 2000px;
`;

export const NoImage = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 77px;
  width: 150px;
`;

export const RoomsNamesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  height: 2000px;

  h6 {
    text-align: center;
  }
`;

export const ImagesAndText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Text = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 77px;
  width: 150px;

  h6 {
    font-size: 12px;
    color: #799283;
    font-weight: 300;
    margin-top: 10px;
  }

  h4 {
    text-align: center;
    font-size: 14px;
    font-weight: 300;
  }
`;
export const RoomsTypeList = styled(RoomsNamesList)`
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  font-size: 14px;
`;

export const RoomsAmenitiesList = styled(RoomsNamesList)`
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
`;

export const Amenities = styled.p`
  font-weight: 300;
  font-size: 14px;
`;

export const RoomTypes = styled(Text)`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

export const RoomsPriceContainer = styled(RoomsNamesList)`
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  font-size: 14px;
`;

export const Prices = styled(Text)`
  text-align: center;
  font-weight: 300;
  font-size: 14px;
`;

export const RoomsStatusContainer = styled(RoomsNamesList)`
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
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
      <RoomsListContainer>
        <RoomsNamesList>
          <RoomsTitleSpan>Room Name</RoomsTitleSpan>

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
          <RoomsTitleSpan>Room Type</RoomsTitleSpan>

          {rooms.map((room) => (
            <RoomTypes>{room.bed_type}</RoomTypes>
          ))}
        </RoomsTypeList>
        <RoomsAmenitiesList>
          <RoomsTitleSpan>Amenities</RoomsTitleSpan>

          {rooms.map((room) => (
            <Amenities>{room.facilities}</Amenities>
          ))}
        </RoomsAmenitiesList>
        <RoomsPriceContainer>
          <RoomsTitleSpan>Price</RoomsTitleSpan>

          {rooms.map((room) => (
            <Prices>{room.rate}</Prices>
          ))}
        </RoomsPriceContainer>
        <RoomsPriceContainer>
          <RoomsTitleSpan>Offer Price</RoomsTitleSpan>

          {rooms.map((room) => (
            <Prices>{room.rate}</Prices>
            // Aquí irían los precios con descuento
          ))}
        </RoomsPriceContainer>
        <RoomsStatusContainer>
          <RoomsTitleSpan>Status</RoomsTitleSpan>

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
