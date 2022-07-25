import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { fetchUsers, usersList } from '../../features/users/usersSlice';
import { Box, Button } from '../../styles/styles'
import { ButtonProgress, TableDivBookings } from '../bookings/Bookings';

export const TableDivUsers = styled(TableDivBookings)`
margin-top: 30px;

thead tr {
  display: grid;
  grid-template-column: repeat(5, 1fr);
  font-size: 20px;
  text-align: center;
}

.categories,
.text {
  display: flex;
  font-size: 15px;
  margin: auto;
  width: 100%;
}

td {
  text-align: center;
}

.text {
  justify-content: center;
  margin: 0 !important;
  font-size: 14px;
}

.title__name {
  display: grid;
  grid-column: 1;
  font-size: 20px;

}

.title__startDate {
  display: grid;
  grid-column: 2;
  font-size: 20px;

}

.title__description {
  display: grid;
  grid-column: 3;
  font-size: 20px;

}

.title__contact {
  display: grid;
  grid-column: 4;
  font-size: 20px;

}

.title__status {
  display: grid;
  grid-column: 5;
  font-size: 20px;

}

tbody {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

th {
  padding: 5px;
  margin: auto;
  width: 100%;
}
`

export const ActiveUser = styled(ButtonProgress)`
background-color: transparent;
color: #5AD07A;
`


export const InactiveUser = styled(ButtonProgress)`
background-color: transparent;
color: #E23428;
`

export const Users = () => {

  const dispatch = useDispatch();
  const users = useSelector(usersList);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Box>
 
    {/* <BoxSortBookings>
      <button>All Employee</button>
      <button>Active Employee</button>
      <button>Inactive Employee</button>

    </BoxSortBookings> */}

    <TableDivUsers>
      <thead>
        <tr className="categories">
          <th className="title__name">Name</th>
          <th className="title__startDate">Start Date</th>
          <th className="title__description">Description</th>
          <th className="title__contact">Contact</th>
          <th className="title__status">Status</th>
        </tr>
       
      </thead>

       {users.map((user) => (
        <>
          <tbody key={user.id} className="column__id">
            <tr className="text">
              <td className="booking__info">
                <span>{user.name_user}</span>
                <br />
                <span>{user.id_user}</span>
                <br />
                <span>{user.email_user}</span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>
                {new Date(user.start_date).toLocaleString("en-GB")}

                </span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>
                  {user.description}
                </span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>
                  {user.phone_user}
                </span>
              </td>
            </tr>

            <tr className="text">
              <td className="booking__info">
                <span>{user.status === "true" && <ActiveUser>ACTIVE</ActiveUser>}</span>
                <span>{user.status === "false" && <InactiveUser>INACTIVE</InactiveUser>}</span>
              </td>
            </tr>

          
        
    
          </tbody>
        </>
      ))} 
    </TableDivUsers>

    <Button>
      <Link to="/users/id">Details</Link>
    </Button>
  </Box>
  )
}
