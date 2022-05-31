import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonDetails, Title } from '../../styles/styles'



export const Bookings = () => {

  return (
    <Box>
    <Title>Bookings</Title>
    <ButtonDetails><Link to="/bookings/id">Details</Link></ButtonDetails>
    </Box>
  )
}
