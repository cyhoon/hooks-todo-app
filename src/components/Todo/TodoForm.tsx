import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { TodoType } from "./TodoContainer";
import ErrorMessage from "../common/ErrorMessage";

interface Props {
  addTodo: (todo: TodoType) => void;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [content, setContent] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value }
      } = event;
      setErrorMessage(null);
      setContent(value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    const newTodo: TodoType = {
      content,
      isCompleted: false
    };

    if (!content) {
      setErrorMessage("입력창이 빈 값입니다 입력 해주세요");
      return;
    }

    addTodo(newTodo);
    setContent("");
  }, [content, addTodo]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const isEnter = event.key === "Enter";

      if (!isEnter) {
        return;
      }

      handleSubmit();
    },
    [handleSubmit]
  );

  return (
    <>
      <Container>
        <Input
          type="text"
          value={content}
          onChange={handleChangeInput}
          onKeyPress={handleKeyPress}
        />
        <StyledButton
          width="100px"
          height="50px"
          backgroundColor="#bbdefb"
          onClick={handleSubmit}
        >
          추가
        </StyledButton>
      </Container>
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 20px;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 24px 12px;
  color: #242424;
  border-radius: 3px;
  border: 1px solid #bbdefb;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 14px;
`;

export default TodoForm;
