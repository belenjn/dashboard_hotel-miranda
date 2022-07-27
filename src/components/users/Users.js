import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  activeEmployees,
  fetchUsers,
  inactiveEmployees,
  usersList,
} from "../../features/users/usersSlice";
import { Box } from "../../styles/styles";
import {
  BoxSortBookings,
  ButtonProgress,
  TableDivBookings,
} from "../bookings/Bookings";

export const TableDivUsers = styled(TableDivBookings)`
  margin-top: 30px;

  thead tr {
    display: grid;
    grid-template-column: repeat(5, 1fr);
    font-size: 20px;
    text-align: center;
  }

  .text {
    display: flex;
    font-size: 15px;
    margin: 0 !important;
    width: 100%;

    .booking__info {
      span {
        text-algin: center;
      }
    }
  }

  .categories {
    width: 97%;
    margin: auto;
    margin-bottom: 10px;
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
`;

export const ActiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #5ad07a;
`;

export const InactiveUser = styled(ButtonProgress)`
  background-color: transparent;
  color: #e23428;
`;

export const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersList);

  const [usersState, setUsersState] = useState(users);

  const activeUsers = users.filter((user) => user.status === true);
  const inactiveUsers = users.filter((user) => user.status === false);

  const handleClickAllUsers = () => {
    setUsersState(users);
  };

  const handleClickActiveUsers = () => {
    setUsersState(activeUsers);
  };

  const handleClickInactiveUsers = () => {
    setUsersState(inactiveUsers);
  };

  useEffect(() => {
    dispatch(fetchUsers(usersState));
  }, [usersState]);

  return (
    <Box>
      <BoxSortBookings>
        <button onClick={handleClickAllUsers}>All Employee</button>
        <button onClick={handleClickActiveUsers}>Active Employee</button>
        <button onClick={handleClickInactiveUsers}>Inactive Employee</button>
      </BoxSortBookings>

      <TableDivUsers>
        <thead>
          <tr className="categories">
            <th className="title__name">User</th>
            <th className="title__startDate">Start Date</th>
            <th className="title__description">Description</th>
            <th className="title__contact">Contact</th>
            <th className="title__status">Status</th>
          </tr>
        </thead>

        {usersState.map((user) => (
          <>
            <tbody className="column__id">
              <tr className="text">
                <td className="booking__info">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        width: 100,
                        height: 100,
                        backgroundImage: `url(${user.user_image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 8,
                        margin: "auto",
                        marginLeft: 20,
                      }}
                    ></div>
                    <div
                      style={{
                        textAlign: "left",
                        display: "flex",
                        fontSize: "11px",
                        marginLeft: 10,
                      }}
                    >
                      <span>
                        {user.user_name}
                        <br />
                        {user._id}
                        <br />
                        {user.user_email}
                      </span>
                    </div>
                  </div>
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
                    {" "}
                    {user.occupation === "reception"
                      ? "Reception"
                      : user.occupation === "room_service"
                      ? "Room Service"
                      : user.occupation === "manager"
                      ? "Manager"
                      : ""}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>{user.user_phone}</span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {user.status === true && <ActiveUser>ACTIVE</ActiveUser>}
                  </span>
                  <span>
                    {user.status === false && (
                      <InactiveUser>INACTIVE</InactiveUser>
                    )}
                  </span>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </TableDivUsers>

      {/* <Button>
        <Link to="/users/id">Details</Link>
      </Button> */}
    </Box>
  );
};
