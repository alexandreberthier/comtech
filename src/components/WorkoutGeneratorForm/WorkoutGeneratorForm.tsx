import { useState } from "react"
import "./WorkoutGeneratorForm.css"
import type { WorkoutOption } from "../../types/Workout"
import { useFtp } from "../../hooks/useFtp"

interface WorkoutGeneratorFormProps {
    onGenerate: (workout: WorkoutOption, duration: number) => void
}

export function WorkoutGeneratorForm({
    onGenerate
}: WorkoutGeneratorFormProps) {
    const { ftp } = useFtp()
  const generationAllowed = ftp !== null

    const [workoutOption, setWorkoutOption] =
        useState<WorkoutOption>("Recovery")

    const [time, setTime] = useState(45)

    function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault()

        if (ftp === null) return

        onGenerate(workoutOption, time)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="wrapper"
        >
            <div className="selects">
                <select
                    value={workoutOption}
                    onChange={(event) =>
                        setWorkoutOption(event.target.value as WorkoutOption)
                    }
                >
                    <option value="Recovery">Recovery</option>
                    <option value="Endurance">Endurance</option>
                    <option value="Threshold">Threshold</option>
                    <option value="VO2 Max">VO2 Max</option>
                </select>

                <select
                    value={time}
                    onChange={(event) =>
                        setTime(Number(event.target.value))
                    }
                >
                    <option value="45">45 Minuten</option>
                    <option value="60">60 Minuten</option>
                    <option value="90">90 Minuten</option>
                    <option value="120">120 Minuten</option>
                </select>
            </div>

            <button
                type="submit"
                className={generationAllowed  ? "btn" : "disabled"}
                disabled={!generationAllowed }
            >
                Workout erstellen
            </button>
        </form>
    )
}