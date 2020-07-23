import React from "react";
import { ChangeMessage } from "./change-message";
import { Container } from "../ui";

export const OfficeChangePage: React.FunctionComponent = () => (
  <React.Fragment>
    <Container>
      <ChangeMessage />
    </Container>
  </React.Fragment>
);
