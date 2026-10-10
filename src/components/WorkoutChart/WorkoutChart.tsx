import "./WorkoutChart.css"
import type { WorkoutStep } from "../../types/Workout"

interface WorkoutChartProps {
    steps: WorkoutStep[]
    ftp: number
}

export function WorkoutChart({ steps, ftp }: WorkoutChartProps) {
    const totalDuration = steps.reduce(
        (sum, step) => sum + step.durationMinutes,
        0
    )

    function calculateWatt(ftpPercentage: number) {
        return Math.round(ftp * (ftpPercentage / 100))
    }

    const stepColors: Record<WorkoutStep["type"], string> = {
        Warmup: "#60a5fa",
        Recovery: "#38bdf8",
        Endurance: "#22c55e",
        Tempo: "#eab308",
        Threshold: "#f97316",
        "VO2 Max": "#ef4444",
        Cooldown: "#60a5fa"
    }

    return (
        <div className="workout-chart">
            {steps.map((step) => {
                const width =
                    (step.durationMinutes / totalDuration) * 100

                const height =
                    (step.ftpPercentage / 120) * 100

                return (
                    <div
                        key={step.id}
                        className="workout-segment"
                        style={{ width: `${width}%` }}
                    >
                        <div className="workout-block-area">
                            <div
                                className="workout-block"
                                style={{
                                    height: `${height}%`,
                                    backgroundColor: stepColors[step.type]
                                }}
                                title={`${step.type}
${step.durationMinutes} Minuten
${step.ftpPercentage}% FTP
${calculateWatt(step.ftpPercentage)} Watt`}
                            >
                                <span>
                                    {calculateWatt(step.ftpPercentage)} W
                                </span>
                            </div>
                        </div>

                        <div className="workout-label">
                            <strong>{step.type}</strong>
                            <span>{step.durationMinutes} min</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}