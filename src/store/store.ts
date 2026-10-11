import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { athleteReducer } from "./athletSlice"
import { workoutReducer } from "./workoutSlice"

const storeKey = "workoutgenerator"

const rootReducer = combineReducers({
  athlet: athleteReducer,
  workouts: workoutReducer
})

const savedState = localStorage.getItem(storeKey)

const preloadedState: RootState | undefined = savedState
  ? JSON.parse(savedState)
  : undefined

export const store = configureStore({
  reducer: rootReducer,
  preloadedState
})

store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem(
    storeKey,
    JSON.stringify(state)
  )
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>