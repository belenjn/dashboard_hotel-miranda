import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonHome, Title } from '../../styles/styles'

export const RoomDetails = () => {
  return (
    <Box>
    <Title>Room Details</Title>
    <ButtonHome>
        <Link to="/" >Home</Link>
      </ButtonHome>
    </Box>
  )
}
