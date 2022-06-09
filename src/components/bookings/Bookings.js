import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Title } from '../../styles/styles'



export const Bookings = () => {

  return (
    <Box>
    <Title>Bookings</Title>
    <Button><Link to="/bookings/id">Details</Link></Button>
    </Box>
  )
}
