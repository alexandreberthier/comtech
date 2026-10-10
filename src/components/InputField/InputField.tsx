
import "./InputField.css"

interface InputFieldProps {
  label: string,
  value: string,
  error?: string,
  onChange: (value: string) => void
}

export function InputField({ label, value, error, onChange }: InputFieldProps) {
  return (
    <div className="inp-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        id={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {error && <p>{error}</p>}
    </div>
  )
}