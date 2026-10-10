
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addWorkout, deleteAll, deleteWorkout } from "../store/workoutSlice";
import type { Workout } from "../types/Workout";

export function useWorkout() {
    const dispatch = useDispatch()
    const workouts = useSelector((state: RootState)=> state.workouts.items)

    function createWorkout(workout: Workout){
        dispatch(addWorkout(workout))
    }

    function eliminateWorkout(id: number) {
        dispatch(deleteWorkout(id))
    }

    function clearWorkouts() {
        dispatch(deleteAll())
    }

    return {
        workouts, createWorkout, eliminateWorkout, clearWorkouts

    }
    
}