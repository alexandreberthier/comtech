import type { PowerZone } from "../../types/PowerZone"
import "./PowerZoneCard.css"

interface PowerZoneCardProps {
  zone: PowerZone
}

export function PowerZoneCard({ zone }: PowerZoneCardProps) {
  return (
    <div
      className="powerCard"
      style={{ borderLeftColor: zone.color }}
    >
      <p className="powerCard-name">
        {zone.name}
      </p>

      <p className="powerCard-watts">
        {zone.minWatt} – {zone.maxWatt} Watt
      </p>
    </div>
  )
}