import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Workout } from "../types/Workout";

interface WorkoutState {
    items: Workout[]
}

const initialState: WorkoutState = {
    items: []
}

const workoutSlice = createSlice({
    name: "workouts",
    initialState,
    reducers: {
        addWorkout(state, action: PayloadAction<Workout>) {
            state.items = [...state.items, action.payload]
        },
        deleteWorkout(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
        },
        deleteAll(state){
            state.items = []
        }

    }
})
export const { addWorkout, deleteWorkout, deleteAll} = workoutSlice.actions
export const workoutReducer = workoutSlice.reducer