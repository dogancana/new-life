import React from "react";
import styled from "styled-components";

const Root = styled.div`
  background-color: white;
  width: 100%;
`;

export const Card: React.FunctionComponent<{ style?: React.CSSProperties }> = ({
  children,
  style,
}) => <Root style={style}>{children}</Root>;
