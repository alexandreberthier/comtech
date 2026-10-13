import "./Modal.css"

interface ModalProps {
  title: string
  code: string
  onClose: () => void
}

export function CodeModal({
  title,
  code,
  onClose
}: ModalProps) {
  return (
    <div
      className="code-overlay"
      onClick={onClose}
    >
      <div
        className="code-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="code-modal-header">
          <h2>{title}</h2>

          <button onClick={onClose}>
            x
          </button>
        </div>

        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}