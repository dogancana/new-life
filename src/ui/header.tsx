import React from "react";

interface Props {
  size: "xl" | "l" | "m" | "s" | "xs";
}

export const Header: React.FunctionComponent<Props> = ({ size, children }) => {
  switch (size) {
    case "xl":
      return <h1>{children}</h1>;
    case "l":
      return <h2>{children}</h2>;
    case "m":
      return <h3>{children}</h3>;
    case "s":
      return <h4>{children}</h4>;
    case "xs":
      return <h5>{children}</h5>;
  }
};
