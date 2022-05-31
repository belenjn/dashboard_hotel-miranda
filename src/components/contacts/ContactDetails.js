import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonHome, Title } from '../../styles/styles'

export const ContactDetails = () => {
  return (
    <Box>
      <Title>Contact Details</Title>
      <ButtonHome>
        <Link to="/">Home</Link>
      </ButtonHome>
    </Box>
  )
}
