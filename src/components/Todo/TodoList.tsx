import React, { useCallback } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { TodoType } from "./TodoContainer";

interface Props {
  todos: TodoType[];
  completeTodo: (todoIndex: number) => () => void;
  deleteTodo: (todoIndex: number) => () => void;
}

const TodoList: React.FC<Props> = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <Container>
      {todos.map((todo, index) => {
        return (
          <TodoWrapper key={index}>
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo(index)}
              deleteTodo={deleteTodo(index)}
            />
          </TodoWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
`;

const TodoWrapper = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

export default TodoList;
