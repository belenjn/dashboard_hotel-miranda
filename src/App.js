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
import { createContext, useEffect, useReducer } from "react";

import { RequireAuth } from "./utils/RequireAuth";
import { Login } from "./components/login/Login";

const initialUser = {
  authenticated: false,
  username: null,
  email: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      localStorage.setItem("authenticated", "correct");
      return {
        ...state,
        authenticated: true,
        username: action.user.username,
        email: action.user.userEmail,
      };
    case "logout":
      localStorage.removeItem("authenticated");
      return { ...state, authenticated: false };
    default:
      return state;
    //falta cambio de email y de username
  }
};

export const authContext = createContext();

function App() {
  const [authenticated, dispatchAuthenticated] = useReducer(
    authReducer,
    initialUser
  );

  useEffect(() => {
    localStorage.setItem("authenticated", JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <authContext.Provider value={{ authenticated, dispatchAuthenticated }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/"
            exact
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/bookings"
            element={
              <RequireAuth>
                <Bookings />
              </RequireAuth>
            }
          />
          <Route
            path="/bookings/id"
            element={
              <RequireAuth>
                <BookingDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/rooms"
            element={
              <RequireAuth>
                <Rooms />
              </RequireAuth>
            }
          />
          <Route
            path="/rooms/id"
            element={
              <RequireAuth>
                <RoomDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
          <Route
            path="/users/id"
            element={
              <RequireAuth>
                <UserDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/contacts"
            element={
              <RequireAuth>
                <Contacts />
              </RequireAuth>
            }
          />
          <Route
            path="/contacts/id"
            element={
              <RequireAuth>
                <ContactDetails />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
}

export default App;
