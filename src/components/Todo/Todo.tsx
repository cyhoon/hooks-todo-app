import React from "react";
import styled, { css } from "styled-components";
import Button from "../common/Button";
import { TodoType } from "./TodoContainer";

interface Props {
  index: number;
  todo: TodoType;
  completeTodo: () => void;
  deleteTodo: () => void;
}

const Todo: React.FC<Props> = ({ todo, completeTodo, deleteTodo }) => {
  const { content, isCompleted } = todo;

  return (
    <Container>
      <Content complete={isCompleted} onClick={completeTodo}>
        {content}
      </Content>
      <div className="options">
        <Button
          backgroundColor={isCompleted ? "#FFB74D" : "#80CBC4"}
          className="complete-button"
          onClick={completeTodo}
        >
          {isCompleted ? "취소" : "완료"}
        </Button>
        <Button backgroundColor="#E57373" onClick={deleteTodo}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .options {
    .complete-button {
      margin-right: 8px;
    }
  }
`;

const Content = styled.p<{ complete: boolean }>`
  margin: 0;
  flex-grow: 1;
  font-size: 18px;
  color: ${props => (props.complete ? "#BDBDBD" : "#212121")};
  cursor: pointer;
  ${props =>
    props.complete &&
    css`
      text-decoration: line-through;
    `}
`;

export default Todo;
