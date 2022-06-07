import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

import { Bookings } from "./components/bookings/Bookings";
import { BookingDetails } from "./components/bookings/BookingDetails";

import { Rooms } from "./components/rooms/Rooms";
import { RoomDetails } from "./components/rooms/RoomDetails";

import { Users } from "./components/users/Users";
import { UserDetails } from "./components/users/UserDetails";

import { Contacts } from "./components/contacts/Contacts";
import { ContactDetails } from "./components/contacts/ContactDetails";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { useState } from "react";
import { RequireAuth } from "./utils/RequireAuth";

function App() {
  const isAuthenticated = localStorage.getItem("authenticated");
  const [authenticated, setAuthenticated] = useState(isAuthenticated);

  return (
    <>
      <BrowserRouter>
        <Navbar authenticated={authenticated} />
        <Routes>
          <Route
            path="/login"
            exact
            element={
              <Login
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="/"
            exact
            element={
              <RequireAuth authenticated={authenticated}>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/bookings"
            element={
              <RequireAuth authenticated={authenticated}>
                <Bookings />
              </RequireAuth>
            }
          />
          <Route
            path="/bookings/id"
            element={
              <RequireAuth authenticated={authenticated}>
                <BookingDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/rooms"
            element={
              <RequireAuth authenticated={authenticated}>
                <Rooms />
              </RequireAuth>
            }
          />
          <Route
            path="/rooms/id"
            element={
              <RequireAuth authenticated={authenticated}>
                <RoomDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/users"
            element={
              <RequireAuth authenticated={authenticated}>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="/users/id"
            element={
              <RequireAuth authenticated={authenticated}>
                <UserDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/contacts"
            element={
              <RequireAuth authenticated={authenticated}>
                <Contacts />
              </RequireAuth>
            }
          />
          <Route
            path="/contacts/id"
            element={
              <RequireAuth authenticated={authenticated}>
                <ContactDetails />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
