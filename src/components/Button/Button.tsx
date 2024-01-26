import { ReactNode } from "react";
import './button-style.css';

type ButtonProps = {
  handler?: () => void,
  children?: ReactNode,
  className?: string
}

const Button: React.FC<ButtonProps> = ({ handler, children, className }) => {
  return (
    <button 
      className={`btn ${className && className}`}
      onClick={handler}>
      {children}
    </button>
  )
}

export default Button