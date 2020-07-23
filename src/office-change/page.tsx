import React from "react";
import { ChangeMessage } from "./change-message";
import { Container } from "../ui";
import { OfficeSelector } from "./office-selector";

export const OfficeChangePage: React.FunctionComponent = () => (
  <React.Fragment>
    <Container>
      <ChangeMessage />
      <OfficeSelector />
    </Container>
  </React.Fragment>
);
