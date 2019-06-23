import React from "react";
import styled from "styled-components";

const Logo: React.FC = () => {
  return <Text>투두</Text>;
};

const Text = styled.h2`
  font-size: 48px;
  margin-bottom: 30px;
  text-shadow: -1px 0 #ef5350, 0 1px #64b5f6, 1px 0 #ffd54f, 0 -1px #512da8;
  color: #fafafa;
`;

export default Logo;
