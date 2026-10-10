import type { PowerZone } from "../types/PowerZone"

export function generatePowerZones(ftp: number): PowerZone[] {
    return [
        {
            name: "Recovery",
            minWatt: 0,
            maxWatt: Math.round(ftp * 0.55),
            color: "#3B82F6"
        },
        {
            name: "Endurance",
            minWatt: Math.round(ftp * 0.56),
            maxWatt: Math.round(ftp * 0.75),
            color: "#22C55E"
        },
        {
            name: "Tempo",
            minWatt: Math.round(ftp * 0.76),
            maxWatt: Math.round(ftp * 0.90),
            color: "#EAB308"
        },
        {
            name: "Threshold",
            minWatt: Math.round(ftp * 0.91),
            maxWatt: Math.round(ftp * 1.05),
            color: "#F97316"
        },
        {
            name: "VO2 Max",
            minWatt: Math.round(ftp * 1.06),
            maxWatt: Math.round(ftp * 1.20),
            color: "#EF4444"
        }
    ]
}