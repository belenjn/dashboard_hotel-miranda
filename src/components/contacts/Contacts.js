import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Title } from '../../styles/styles'

export const Contacts = () => {
  return (
    <Box>
    <Title>Contacts</Title>
    <Button><Link to="/contacts/id">Details</Link></Button>
    </Box>
  )
}
