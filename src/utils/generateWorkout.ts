import type { WorkoutOption, WorkoutStep } from "../types/Workout"

export function generateWorkout(
  workout: WorkoutOption,
  duration: number
): WorkoutStep[] {

  if (workout === "Recovery") {
    return [
      {
        id: 1,
        type: "Warmup",
        durationMinutes: 5,
        ftpPercentage: 45
      },
      {
        id: 2,
        type: "Recovery",
        durationMinutes: duration - 10,
        ftpPercentage: 50
      },
      {
        id: 3,
        type: "Cooldown",
        durationMinutes: 5,
        ftpPercentage: 40
      }
    ]
  }

  if (workout === "Endurance") {
    return [
      {
        id: 1,
        type: "Warmup",
        durationMinutes: 10,
        ftpPercentage: 55
      },
      {
        id: 2,
        type: "Endurance",
        durationMinutes: duration - 20,
        ftpPercentage: 70
      },
      {
        id: 3,
        type: "Cooldown",
        durationMinutes: 10,
        ftpPercentage: 50
      }
    ]
  }

  if (workout === "Threshold") {
    const thresholdDuration = duration - 25
    const firstInterval = Math.floor(thresholdDuration / 2)
    const secondInterval = thresholdDuration - firstInterval

    return [
      {
        id: 1,
        type: "Warmup",
        durationMinutes: 10,
        ftpPercentage: 55
      },
      {
        id: 2,
        type: "Threshold",
        durationMinutes: firstInterval,
        ftpPercentage: 100
      },
      {
        id: 3,
        type: "Recovery",
        durationMinutes: 5,
        ftpPercentage: 50
      },
      {
        id: 4,
        type: "Threshold",
        durationMinutes: secondInterval,
        ftpPercentage: 100
      },
      {
        id: 5,
        type: "Cooldown",
        durationMinutes: 10,
        ftpPercentage: 50
      }
    ]
  }

  if (workout === "VO2 Max") {
    return [
      {
        id: 1,
        type: "Warmup",
        durationMinutes: 10,
        ftpPercentage: 55
      },
      {
        id: 2,
        type: "VO2 Max",
        durationMinutes: 3,
        ftpPercentage: 115
      },
      {
        id: 3,
        type: "Recovery",
        durationMinutes: 3,
        ftpPercentage: 50
      },
      {
        id: 4,
        type: "VO2 Max",
        durationMinutes: 3,
        ftpPercentage: 115
      },
      {
        id: 5,
        type: "Recovery",
        durationMinutes: 3,
        ftpPercentage: 50
      },
      {
        id: 6,
        type: "VO2 Max",
        durationMinutes: 3,
        ftpPercentage: 115
      },
      {
        id: 7,
        type: "Recovery",
        durationMinutes: 3,
        ftpPercentage: 50
      },
      {
        id: 8,
        type: "VO2 Max",
        durationMinutes: 3,
        ftpPercentage: 115
      },
      {
        id: 9,
        type: "Endurance",
        durationMinutes: duration - 41,
        ftpPercentage: 65
      },
      {
        id: 10,
        type: "Cooldown",
        durationMinutes: 10,
        ftpPercentage: 45
      }
    ]
  }

  return []
}