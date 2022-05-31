import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonDetails, Title } from '../../styles/styles'

export const Contacts = () => {
  return (
    <Box>
    <Title>Contacts</Title>
    <ButtonDetails><Link to="/contacts/id">Details</Link></ButtonDetails>
    </Box>
  )
}
