import React from 'react'
import { Link } from 'react-router-dom'
import { Box, ButtonDetails, Title } from '../../styles/styles'

export const Users = () => {
  return (
    <Box>
    <Title>Users</Title>
    <ButtonDetails><Link to="/users/id">Details</Link></ButtonDetails>
    </Box>
  )
}
