import React from "react";
import styled from "styled-components";
import { PageHeader, Footer, GlobalStyles, theme } from "../ui";
import { BrowserRouter, Redirect } from "react-router-dom";
import { PrivateRoute } from "../auth";
import { AuthProvider } from "../auth/provider";
import { OfficeChangeFeature } from "../office-change";

const Content = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  padding: ${theme.spacing}px;
  background-color: ${theme.colors.halfGrey};
`;

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <GlobalStyles />
        <PageHeader />
        <Content>
          <BrowserRouter>
            <Redirect path="/" to="/office-change" />
            <PrivateRoute
              path="/office-change"
              component={OfficeChangeFeature}
            />
          </BrowserRouter>
        </Content>
        <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
