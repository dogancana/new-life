import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

const Root = styled.header`
  height: 40px;
  background-color: white;
  padding: ${theme.spacing};
`;

export const PageHeader: React.FunctionComponent = () => <Root>New life</Root>;
