import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// @ts-ignore
import untypedMiddleware from 'untyped-middleware'
import rootReducer from '@/reducers/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(thunk,logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch