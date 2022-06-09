import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Title } from '../../styles/styles'

export const Rooms = () => {
  return (
    <Box>
    <Title>Rooms</Title>
    <Button><Link to="/rooms/id">Details</Link></Button>
    </Box>
  )
}
