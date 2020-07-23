import React, { useEffect } from "react";
import { Office, getOffices } from "../api";
import { offices } from "../api/mock";
import { OfficeCard } from "./office-card";
import styled from "styled-components";
import { theme } from "../ui";
import { Button } from "../ui/button";

interface State {
  loading: boolean;
  error?: string;
  offices?: Office[];
  selectedOffice?: Office;
}

const Spacing = styled.div`
  margin-top: ${theme.spacing / 2}px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OfficeSelector: React.FunctionComponent = () => {
  const [state, setState] = React.useState<State>({ loading: false });

  useEffect(() => {
    loadOffices();
  }, []);

  async function loadOffices() {
    setState((p) => ({ ...p, loading: true }));
    try {
      const offices = await getOffices();
      setState((p) => ({ ...p, offices, loading: false }));
    } catch (e) {
      setState((p) => ({
        loading: false,
        error: "Service unavailable. Please try again later",
      }));
    }
  }

  if (state.loading) return <p>Loading...</p>;
  if (!state.loading && state.error) return <p>{state.error}</p>;

  return (
    <React.Fragment>
      <Spacing />
      {offices.map((o) => (
        <React.Fragment key={o.city}>
          <Spacing />
          <OfficeCard
            selected={!!(o.city === state.selectedOffice?.city)}
            office={o}
            onSelect={onOfficeSelect}
          />
        </React.Fragment>
      ))}
      <Spacing />
      <ButtonWrapper>
        <Button>Submit</Button>
      </ButtonWrapper>
    </React.Fragment>
  );

  function onOfficeSelect(selectedOffice: Office) {
    setState((p) => ({ ...p, selectedOffice }));
  }
};
