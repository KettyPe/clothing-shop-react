import React from 'react';
import "./style.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
     const buttonClass = className ? `button ${className}` : 'button';
     return (
          <button className={buttonClass} {...props}>
               <span>
                    {children}
               </span>
          </button>
     );
};

export default Button;