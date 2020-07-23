import React from "react";
import styled from "styled-components";
import { theme } from "./theme";

interface Props {
  size: "xl" | "l" | "m" | "s" | "xs";
}

const Content = styled.span`
  color: ${theme.colors.blue};
`;

export const Header: React.FunctionComponent<Props> = ({ size, children }) => {
  switch (size) {
    case "xl":
      return (
        <h1>
          <Content>{children}</Content>
        </h1>
      );
    case "l":
      return (
        <h2>
          <Content>{children}</Content>
        </h2>
      );
    case "m":
      return (
        <h3>
          <Content>{children}</Content>
        </h3>
      );
    case "s":
      return (
        <h4>
          <Content>{children}</Content>
        </h4>
      );
    case "xs":
      return (
        <h5>
          <Content>{children}</Content>
        </h5>
      );
  }
};
