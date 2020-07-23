import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

const Root = styled.footer`
  height: 100px;
  background-color: ${theme.colors.green};
  padding: ${theme.spacing}px;
`;

export const Footer: React.FunctionComponent = () => <Root>Footer</Root>;
