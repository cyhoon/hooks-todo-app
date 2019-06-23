import React from "react";
import styled from "styled-components";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <Container>[에러] {message}</Container>;
};

const Container = styled.div`
  width: 100%;
  padding-top: 10px;
  padding-left: 4px;
  color: #f44336;
`;

export default ErrorMessage;
