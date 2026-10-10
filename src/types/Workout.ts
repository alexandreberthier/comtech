export type WorkoutOption = "Recovery" | "Endurance" | "Tempo" | "Threshold" | "VO2 Max"

export type WorkoutType = "Warmup" | "Cooldown" | "Recovery"  | "Tempo" | "Endurance" | "Threshold" | "VO2 Max"

export interface WorkoutStep {
    id: number,
    type: WorkoutType,
    durationMinutes: number,
    ftpPercentage: number
}

export interface Workout {
  id: number
  name: string
  type: WorkoutOption
  durationMinutes: number
  steps: WorkoutStep[]
}