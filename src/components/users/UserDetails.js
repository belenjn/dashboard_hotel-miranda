import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonHome, Title } from '../../styles/styles'

export const UserDetails = () => {
  return (
    <Box>
    <Title>User Details</Title>
    <ButtonHome><Link to="/">Home</Link></ButtonHome>

    </Box>
  )
}
