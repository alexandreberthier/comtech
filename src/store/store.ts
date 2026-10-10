import { configureStore } from "@reduxjs/toolkit";
import { athleteReducer } from "./athletSlice";
import { workoutReducer } from "./workoutSlice";

export const store = configureStore({
    reducer: {
        athlet: athleteReducer,
        workouts: workoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch