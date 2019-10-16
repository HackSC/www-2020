import styled from "styled-components";

import { Header, Body } from "./type";

const Details = () => {
  return (
    <Wrapper>
      <Row>
        <ContentColumn>
          <Header>Details</Header>

          <Body>
            HackSC 2020 is a hackathon with a mission. Located in the heart of
            sunny Los Angeles, HackSC will provide a weekend full of innovation,
            connection, and education. In an interdisciplinary endeavor, join
            together with 800+ hackers, designers, and visionaries to engage in
            workshops, listen to speakers, and develop programs, tools, and
            relationships that can last for life. We hope to have you join us!
            For more information and updates, check out our social media and
            read our Medium Blog.
          </Body>
          <Body>You can check out what we were up to last here.</Body>
        </ContentColumn>

        <FactsColumn>
          <h2>When?</h2>
          <b>January 31 - February 2nd, 2020</b>

          <h2>Where?</h2>
          <b>On USC's campus</b>

          <h2>Price?</h2>
          <b>Free!</b>

          <h2>How?</h2>
          <b>Apps open up in November.</b>
        </FactsColumn>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 125px;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`;

const FactsColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  padding-left: 100px;
  padding-right: 100px;
  box-sizing: border-box;
`;

export default Details;
