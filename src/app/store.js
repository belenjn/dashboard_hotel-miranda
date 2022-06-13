
import { configureStore } from '@reduxjs/toolkit';
import bookingsSlice from '../features/bookings/bookingsSlice';
import contactsSlice from '../features/contact/contactSlice';
import roomsSlice from '../features/rooms/roomsSlice';
import usersSlice from '../features/users/usersSlice';



export default configureStore({
    reducer: {
        bookings: bookingsSlice,
        contacts: contactsSlice,
        rooms: roomsSlice,
        users: usersSlice
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  }),});