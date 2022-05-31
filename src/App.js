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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/id" element={<BookingDetails />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/id" element={<RoomDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/id" element={<UserDetails />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/id" element={<ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
