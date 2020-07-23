import React from "react";
import styled from "styled-components";
import { PageHeader, Footer, GlobalStyles, theme } from "../ui";
import { OfficeChangePage } from "../office-change";

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
      <GlobalStyles />
      <PageHeader />
      <Content>
        <OfficeChangePage />
      </Content>
      <Footer />
    </React.Fragment>
  );
}

export default App;
