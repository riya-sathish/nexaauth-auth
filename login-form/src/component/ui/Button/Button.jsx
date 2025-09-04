import "./Button.css";

const Button = ({children, type = "button", className = ""}) => {
  return (
    <button type={type}className={`btn-primary $(className)`}>{children}
    </button>
  )
}

export default Button;