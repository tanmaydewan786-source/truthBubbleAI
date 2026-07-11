import './Button.css'

function Button({ children, label, onClick, variant = 'primary', type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`.trim()}
    >
      {children ?? label}
    </button>
  )
}

export default Button;
