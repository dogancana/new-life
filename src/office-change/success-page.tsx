import React from "react";
import { Container } from "../ui";
import { Header } from "../ui/header";
import { useParams, RouteComponentProps } from "react-router-dom";

export const OfficeChangeSuccessPage: React.FunctionComponent<RouteComponentProps<{
  city: string;
}>> = ({ match }) => {
  const { city } = match.params;

  console.log(match);

  if (!city)
    return (
      <Container>
        <p>
          There was an error while loading this page. Please try again later
        </p>
      </Container>
    );

  return (
    <Container>
      <Header size="l">Office change successfull!</Header>
      <span>
        Your submission for changing your office to {city} is processed
        successfully. You'll receive further instructions via company e-mail.
      </span>
    </Container>
  );
};
