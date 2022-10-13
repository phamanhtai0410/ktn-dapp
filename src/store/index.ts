import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import logger from 'redux-logger'
// @ts-ignore
import untypedMiddleware from 'untyped-middleware'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat([], logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store