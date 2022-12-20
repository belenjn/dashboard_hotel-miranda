import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, allUsers } from "../../features/users/usersSlice";
import {
  ActiveUser,
  Box,
  BoxSortBookings,
  InactiveUser,
  TableDivUsers,
} from "../../styles/styles";

// TODO: Form for new employee

export const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(allUsers);

  const [usersState, setUsersState] = useState([]);
  const [order, setOrder] = useState("newest");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const filteredOrderUsers = users.filter((user) =>
      user.status.includes(filter)
    );
    const filteredOrderSearchUsers = filteredOrderUsers.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );
    filteredOrderSearchUsers.sort((a, b) => {
      if (order === "newest") {
        if (a.startDate < b.startDate) {
          return 1;
        } else if (a.startDate > b.startDate) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a.fullName > b.fullName) {
          return 1;
        } else if (a.fullName < b.fullName) {
          return -1;
        } else {
          return 0;
        }
      }
    });
    setUsersState(filteredOrderSearchUsers);
  }, [users, filter, order, query]);

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
          <button onClick={() => setUsersState(users)}>All Employee</button>
          <button onClick={() => setFilter("true")}>Active Employee</button>
          <button onClick={() => setFilter("false")}>Inactive Employee</button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            marginRight: 45,
          }}
        >
          {/* <button
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
          </button> */}
          {/* <select
            onChange={(e) => setOrder(e.target.value)}
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
          </select> */}
          {/* <Input
            type="text"
            placeholder="Search employee"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></Input> */}
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
        {query ? (
          <h2
            style={{
              textAlign: "center",
              color: "red",
              opacity: "0.30",
              width: "20%",
              margin: "auto",
              marginTop: "100px",
            }}
          >
            User not found
          </h2>
        ) : (
          ""
        )}
        {usersState.map((user) => (
          <div key={user.id}>
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
                        backgroundImage: `url(${user.photo})`,
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
                        {user.fullName}
                        <br />
                        {user.id}
                        <br />
                        {user.email}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {new Date(user.startDate).toLocaleString("en-GB")}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {" "}
                    {user.occupation === "Reception"
                      ? "Reception"
                      : user.occupation === "Room Service"
                      ? "Room Service"
                      : user.occupation === "Manager"
                      ? "Manager"
                      : ""}
                  </span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>{user.contact}</span>
                </td>
              </tr>

              <tr className="text">
                <td className="booking__info">
                  <span>
                    {user.status === "true" && <ActiveUser>ACTIVE</ActiveUser>}
                  </span>
                  <span>
                    {user.status === "false" && (
                      <InactiveUser>INACTIVE</InactiveUser>
                    )}
                  </span>
                </td>
              </tr>
            </tbody>
          </div>
        ))}
      </TableDivUsers>
    </Box>
  );
};
