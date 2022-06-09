import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Title } from '../../styles/styles'

export const Users = () => {
  return (
    <Box>
    <Title>Users</Title>
    <Button><Link to="/users/id">Details</Link></Button>
    </Box>
  )
}
