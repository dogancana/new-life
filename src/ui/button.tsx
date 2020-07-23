import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Root = styled.button`
  color: #fff;
  background-color: #0abf53;
  border-color: #0abf53;
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;
  user-select: none;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #078f3e;
    border-color: #078f3e;
  }

  &:disabled {
    background-color: grey;
  }
`;

export const Button: React.FunctionComponent<Props> = ({
  children,
  ...rest
}) => <Root {...rest}>{children}</Root>;
