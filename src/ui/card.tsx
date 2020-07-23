import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: white;
`;

export const Card: React.FunctionComponent = ({ children }) => (
  <Root>{children}</Root>
);
