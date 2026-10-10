import type { WorkoutOption} from "./Workout";

export interface PowerZone {
    name: WorkoutOption,
    minWatt: number,
    maxWatt: number
    color: string
}