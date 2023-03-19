import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import userReducer from './features/user/userSlice'
import contactReducer from './features/contact/contactSlice'
import menuReducer from './features/menu/menuSlice'
import resertvationReducer from './features/reservation/reservationSlice'
import thunkMiddleware from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    menu: menuReducer,
    reservation: resertvationReducer,
    contact: contactReducer
  },
  middleware: new MiddlewareArray().concat(thunkMiddleware, logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);