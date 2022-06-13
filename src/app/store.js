
import { configureStore } from '@reduxjs/toolkit';
import bookingsSlice from '../features/bookings/bookingsSlice';

/*
import usersReducer
import bookingsReducer
import roomsReducer
import contactReducer
 */

export default configureStore({
    reducer: {
        bookings: bookingsSlice
        /*
        users: usersReducer,
        bookings: bookingsReducer,
        rooms: roomsReducer,
        contact: contactReducer
         */
    },
    middleware: getDefaultMiddleware =>  getDefaultMiddleware({    serializableCheck: false,  }),});