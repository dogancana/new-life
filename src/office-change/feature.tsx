import React from "react";
import { BrowserRouter, Redirect, RouteComponentProps } from "react-router-dom";
import { PrivateRoute } from "../auth";
import { OfficeChangePage } from "./page";
import { OfficeChangeSuccessPage } from "./success-page";

export const OfficeChangeFeature: React.FunctionComponent<RouteComponentProps> = ({
  match,
}) => (
  <BrowserRouter>
    <PrivateRoute
      path={`${match.path}/application`}
      component={OfficeChangePage}
    />
    <PrivateRoute
      path={`${match.path}/success/:city`}
      component={OfficeChangeSuccessPage}
    />
    <Redirect path={match.path} to={`${match.path}/application`} />
  </BrowserRouter>
);
