import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { Container } from "../ui";
import { useAuthContext } from "./provider";

export const PrivateRoute: React.FunctionComponent<RouteProps> = ({
  children,
  ...rest
}) => {
  const { authenticate, authenticating, loggedIn } = useAuthContext();
  React.useEffect(() => {
    authenticate();
  }, []);

  if (authenticating) return <Container>Authenticating...</Container>;
  if (!authenticating && !loggedIn)
    return <Container>You are not logged in!</Container>;

  return <Route {...rest}>{children}</Route>;
};
