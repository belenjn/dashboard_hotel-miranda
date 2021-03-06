import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { fetchUsers, usersList } from "../../features/users/usersSlice";
import {
  ActiveUser,
  Box,
  BoxSortBookings,
  ButtonEmployee,
  InactiveUser,
  Input,
  TableDivUsers,
} from "../../styles/styles";

export const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersList);

  const [usersState, setUsersState] = useState(users);

  const activeEmployees = users.filter((user) => user.status === true);
  const inactiveEmployees = users.filter((user) => user.status === false);

  const handleClickAllUsers = () => {
    setUsersState(users);
  };

  const handleClickActiveUsers = () => {
    setUsersState(activeEmployees);
  };

  const handleClickInactiveUsers = () => {
    setUsersState(inactiveEmployees);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    setUsersState(users);
  }, [users]);

  return (
    <Box>
      <BoxSortBookings>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
          }}
        >
          <button onClick={handleClickAllUsers}>All Employee</button>
          <button onClick={handleClickActiveUsers}>Active Employee</button>
          <button onClick={handleClickInactiveUsers}>Inactive Employee</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginRight: 45,
          }}
        >
          <button
            style={{
              backgroundColor: "#135846",
              borderRadius: 12,
              border: "none",
              color: "white",
              fontSize: 14,
              margin: "auto",
              marginRight: 20,
              height: 55,
              width: 120,
            }}
          >
            New Employee
          </button>
          <select
            style={{
              borderColor: "#135846",
              color: "#135846",
              borderRadius: 12,
              height: 55,
              width: 120,
              textAlign: "center",
              margin: "auto",
              fontSize: 14,
            }}
          >
            <option>Newest</option>
            <option>Name</option>
          </select>
          <Input type="text" placeholder="Search employee"></Input>
        </div>
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
          <div key={user._id}>
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
          </div>
        ))}
      </TableDivUsers>

      {/* <Button>
        <Link to="/users/id">Details</Link>
      </Button> */}
    </Box>
  );
};
