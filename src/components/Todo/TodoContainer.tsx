import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import styled from "styled-components";

export interface TodoType {
  content: string;
  isCompleted: boolean;
}

const TodoContainer: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      content: "커스텀 훅스 자료 만들기",
      isCompleted: false
    },
    {
      content: "훅스 정복하기",
      isCompleted: true
    }
  ]);

  const addTodo = (todo: TodoType) => {
    const newTodos = [{ ...todo }, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (todoIndex: number) => () => {
    const newTodos = [...todos];

    const { isCompleted } = newTodos[todoIndex];
    newTodos[todoIndex].isCompleted = !isCompleted;

    setTodos(newTodos);
  };

  const deleteTodo = (todoIndex: number) => () => {
    setTodos(todos.filter((_, index) => index !== todoIndex));
  };

  return (
    <Container>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
`;

export default TodoContainer;
