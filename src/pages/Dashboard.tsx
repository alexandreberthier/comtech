import { useState } from "react"

import type { Workout, WorkoutOption } from "../types/Workout"
import type { PowerZone } from "../types/PowerZone"

import { generatePowerZones } from "../utils/generatePowerZones"
import { generateWorkout } from "../utils/generateWorkout"

import { InputField } from "../components/InputField/InputField"
import { PowerZoneCard } from "../components/PowerZoneCard/PowerZoneCard"
import { WorkoutGeneratorForm } from "../components/WorkoutGeneratorForm/WorkoutGeneratorForm"
import { WorkoutChart } from "../components/WorkoutChart/WorkoutChart"

import { useFtp } from "../hooks/useFtp"
import { useWorkout } from "../hooks/useWorkout"

export function Dashboard() {
  const { ftp, setFtp, clearFtp } = useFtp()

  const {
    workouts,
    createWorkout,
    eliminateWorkout,
    clearWorkouts
  } = useWorkout()

  const [ftpError, setFtpError] = useState("")

  const powerZones: PowerZone[] =
    ftp !== null
      ? generatePowerZones(ftp)
      : []

  function handleFtp(value: string) {
    if (value === "") {
      clearFtp()
      setFtpError("Bitte gültigen FTP eingeben")
      return
    }

    const ftpNumber = Number(value)

    if (ftpNumber <= 0) {
      clearFtp()
      setFtpError("Bitte gültigen FTP eingeben")
      return
    }

    setFtp(ftpNumber)
    setFtpError("")
  }

  function handleGenerateWorkout(
    workout: WorkoutOption,
    duration: number
  ) {
    if (ftp === null) return

    const steps = generateWorkout(workout, duration)

    const newWorkout: Workout = {
      id: Date.now(),
      name: `${workout} Workout`,
      type: workout,
      durationMinutes: duration,
      steps
    }

    createWorkout(newWorkout)
  }

  return (
    <main className="dashboard">
      <section>
        <h1>Workout Planner</h1>

        <div className="input-wrapper">
          <InputField
            label="Gib dein FTP ein:"
            value={ftp === null ? "" : String(ftp)}
            error={ftpError}
            onChange={handleFtp}
          />
        </div>
      </section>

      {powerZones.length > 0 && (
        <section>
          <h2>Deine Power-Zonen</h2>

          <div className="zones-wrapper">
            {powerZones.map((zone) => (
              <PowerZoneCard
                key={zone.name}
                zone={zone}
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2>Workout erstellen</h2>

        <WorkoutGeneratorForm
          onGenerate={handleGenerateWorkout}
        />
      </section>

      {ftp !== null && workouts.length > 0 && (
        <section className="workouts">
          <div className="workouts-header">
            <h2>Deine Workouts</h2>

            <button
              type="button"
              onClick={clearWorkouts}
            >
              Alle löschen
            </button>
          </div>

          {workouts.map((workout) => (
            <article
              className="workout"
              key={workout.id}
            >
              <div className="workout-header">
                <div>
                  <h3>{workout.name}</h3>
                  <p>{workout.durationMinutes} Minuten</p>
                </div>

                <button
                  type="button"
                  onClick={() => eliminateWorkout(workout.id)}
                >
                  Löschen
                </button>
              </div>

              <WorkoutChart
                steps={workout.steps}
                ftp={ftp}
              />
            </article>
          ))}
        </section>
      )}
    </main>
  )
}