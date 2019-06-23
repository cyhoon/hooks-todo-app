import React from "react";
import styled from "styled-components";
import Logo from "../common/Logo";
import TodoContainer from "../Todo/TodoContainer";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Logo />
      <TodoContainer />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
