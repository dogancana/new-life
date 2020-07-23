import React from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container: React.FunctionComponent = ({ children }) => (
  <Root>
    <Content>{children}</Content>
  </Root>
);
