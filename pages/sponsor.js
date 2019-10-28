import styled from "styled-components";

import { Navbar, MetaTags, Footer, MLH } from "../components";

import { Header, Body, Bold } from "../components/type";

const Sponsor = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - Sponsorship" />

      <Navbar />

      <Wrapper>
        <Header>Sponsor Us</Header>
        <StyledBody>
          This January, HackSC will bring <Bold>1000+</Bold> hackers to the
          University of Southern California. Students will have 36 hours to
          create lasting, innovative and impactful products. Sponsors will have
          an outstanding opportunity to{" "}
          <Bold>promote your own products and APIs,</Bold> as well as{" "}
          <Bold>access top talent</Bold> from around the country.
        </StyledBody>

        <StyledBody>
          Interested in sponsoring? E-mail us at{" "}
          <a href="mailto:sponsorship@hacksc.com" target="_blank">
            sponsorship@hacksc.com
          </a>
        </StyledBody>

        <StatsSection>
          <Subheader>Last Year's Successes</Subheader>

          <Stats>
            <Stat>
              <Number>600+</Number> attendees
            </Stat>
            <Stat>
              <Number>100</Number> projects submitted
            </Stat>
            <Stat>
              <Number>40:60</Number> female:male ratio
            </Stat>
            <Stat>
              <Number>145</Number> # of schools applied
            </Stat>

            <Stat>
              <Number>400+</Number> usc students
            </Stat>
            <Stat>
              <Number>2500+</Number> # of applicants
            </Stat>
            <Stat>
              <Number>92</Number> # of prizes awarded
            </Stat>
            <Stat>
              <Number>15</Number> puppies
            </Stat>

            <Stat>
              <Number>3000</Number> lbs of soylent
            </Stat>
            <Stat>
              <Number>40</Number> judges
            </Stat>
            <Stat>
              <Number>30</Number> sponsors
            </Stat>
            <Stat>
              <Number>infinite</Number> memories made
            </Stat>
          </Stats>
        </StatsSection>
      </Wrapper>

      <Footer />
      <MLH />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  padding-bottom: 75px;
  flex-direction: column;
`;

const StyledBody = styled(Body)`
  font-size: 22px;
  line-height: 32px;
  margin-top: 16px;
`;

const StatsSection = styled.div`
  padding: 64px 0;
`;

const Subheader = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const Stats = styled.div`
  display: flex;
  color: #ff5353;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Stat = styled.div`
  flex-basis: 23%;
  background: peach;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 120px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 83, 83, 0.1);
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 20px;

  ${({ theme }) => theme.media.desktop`
    flex-basis: 48%;
  `}

  ${({ theme }) => theme.media.mobile`
    flex-basis: 100%;
  `}
`;

const Number = styled.span`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 8px;
`;

export default Sponsor;
