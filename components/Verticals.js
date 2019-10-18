import styled from "styled-components";

import { Header, Body } from "./type";
import { Cards, Card } from "./VerticalCards";

import CivilLibertiesGraphic from "../assets/verticals/civil_liberties.png";
import EquityGraphic from "../assets/verticals/equity.png";
import MentalHealthGraphic from "../assets/verticals/mental_health.png";
import SustainabilityGraphic from "../assets/verticals/sustainability.png";

const Verticals = () => {
  return (
    <>
      <Wrapper>
        <VerticalsHeader>Verticals</VerticalsHeader>

        <Row>
          <Column>
            <Header>Social Justice</Header>
          </Column>

          <Column>
            <Body>
              This year, we’re focusing on issues relating to social justice.
              The 4 verticals are: civil liberties, sustainability, equity, and
              mental health. We’re encouraging every participant to tackle the
              problems plaguing today’s world and innovate ideas around them.
            </Body>
          </Column>
        </Row>
      </Wrapper>
      <Cards>
        <Card color="#FEDA22">
          <img src={CivilLibertiesGraphic} />
          <h3>Civil Liberties</h3>
          <p>
            Everyone deserves to feel comfortable in their own skin, online or
            off.
          </p>
        </Card>

        <Card color="#86DCEA">
          <img src={SustainabilityGraphic} />
          <h3>Sustainability</h3>
          <p>
            Mother Earth has a fever and it's in our best interest to cure her.
          </p>
        </Card>

        <Card color="#FF8379">
          <img src={EquityGraphic} />
          <h3>Equity</h3>
          <p>
            Not everyone has access to financial literacy, legal aid, health
            information, and other sources of relevant knowledge.
          </p>
        </Card>

        <Card color="#FF2B9D">
          <img src={MentalHealthGraphic} />
          <h3>Mental Health</h3>
          <p>
            The conversation around mental health is becoming more accepted, but
            there is still a shortage of stigma-free resources.
          </p>
        </Card>
      </Cards>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 125px;
  padding-bottom: 25px;
  flex-direction: column;
`;

const VerticalsHeader = styled.h2`
  font-family: "Proggy";
  font-size: 26px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  flex-basis: 50%;
`;

export default Verticals;
