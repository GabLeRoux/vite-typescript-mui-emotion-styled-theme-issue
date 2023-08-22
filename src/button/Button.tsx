// Button.tsx
import React from 'react';
import { StyledButton } from "./Button.styled";

interface ButtonProps {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const Button: React.FC<ButtonProps> = ({ isDarkTheme, toggleTheme }) => (
    <StyledButton onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </StyledButton>
);

export default Button;
