import React from "react";
import { Card } from "../ui/card";
import styled, { css } from "styled-components";
import { theme } from "../ui";
import { Office } from "../api";
import { Header } from "../ui/header";

interface Props {
  office: Office;
  selected?: boolean;
  onSelect: (office: Office) => void;
}

interface State {}

const selectedStyle = css`
  border-right: 5px solid ${theme.colors.green};
`;
const Root = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  cursor: pointer;
  position: relative;
  border-right: 5px solid transparent;
  transition: all 0.3s;

  &:hover {
    left: -3px;
  }

  ${(p: { selected: boolean }) => (p.selected ? selectedStyle : null)};
`;

const Content = styled.div`
  margin-left: ${theme.spacing}px;
  padding: ${theme.spacing / 2}px;

  h3 {
    margin: 0 0 5px 0;
  }

  p {
    margin: 2px;
    font-size: 12px;
    line-height: 12px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 200px;
  background-size: cover;
`;

export const OfficeCard: React.FunctionComponent<Props> = ({
  office,
  onSelect,
  selected,
}) => {
  if (!office) return null;
  return (
    <Card style={{ width: "100%" }}>
      <Root selected={!!selected} onClick={handleSelect}>
        <Image src={office.picture} />
        <Content>
          <Header size="m">{office.city}</Header>
          <p>{office.weather.description}</p>
          <p>Average temperature: {office.weather.averageTemparature}C</p>
          <p>
            Average flights from your location:{" "}
            {office.flights.averageTicketsFromCurrentOffice} Euros
          </p>
        </Content>
      </Root>
    </Card>
  );

  function handleSelect() {
    onSelect(office);
  }
};
