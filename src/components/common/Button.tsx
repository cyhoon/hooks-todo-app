import React from "react";
import styled, { css } from "styled-components";

interface Props {
  className?: string;
  width?: string;
  height?: string;
  backgroundColor: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  backgroundColor,
  width,
  height,
  onClick,
  children
}) => {
  return (
    <StyledButton
      className={className}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  width?: string;
  height?: string;
  backgroundColor: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  height: 24px;
  border: none;
  background-color: ${props => props.backgroundColor};
  border-radius: 3px;
  color: white;
  outline: none;
  cursor: pointer;
  font-weight: bold;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `};

  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export default Button;
