import React from "react";
import { Link } from "react-router-dom";
import { Box, ButtonHome, Title } from "../../styles/styles";

export const BookingDetails = () => {
  return (
    <Box>
      <Title>Booking Details</Title>
      <ButtonHome>
        <Link to="/">Home</Link>
      </ButtonHome>
    </Box>
  );
};
