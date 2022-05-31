import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonDetails, Title } from '../../styles/styles'

export const Rooms = () => {
  return (
    <Box>
    <Title>Rooms</Title>
    <ButtonDetails><Link to="/rooms/id">Details</Link></ButtonDetails>
    </Box>
  )
}
