import React from "react";
import { Header } from "../ui/header";
import { useAuthContext } from "../auth/provider";

export const ChangeMessage: React.FunctionComponent = () => {
  const { loggedIn, user } = useAuthContext();

  if (!loggedIn) return null;

  return (
    <React.Fragment>
      <Header size="l">Office Change</Header>
      <span>
        Hi {user?.name || "There"}!. You just requested to change your working
        office from us. Here you can make your choice depending on the
        information we provide and start your new life there.
      </span>
      <span>
        Please inspect the offices suitable for you and make your choice.
      </span>
    </React.Fragment>
  );
};
