import styled from "styled-components";

import {
  Navbar,
  MetaTags,
  Footer,
  MLH,
  SponsorFeedbackForm
} from "../components";

import { Header, Body, Bold } from "../components/type";

const SponsorFeedback = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - Sponsorship Feedback" />

      <Navbar />

      <Wrapper>
        <Header>Dear Sponsors,</Header>
        <StyledBody>
          <StyledSpan>
            From all the hackers and organizers at HackSC,
            <Bold> thank you </Bold> for supporting our event this year!
          </StyledSpan>

          <StyledSpan>
            Thanks to you, we were able to admit 700+ hackers, serve 1100+
            meals, award $13,000+ in prizes, and provide a fulfilling and
            memorable experience for the hackers.
          </StyledSpan>

          <StyledSpan>
            In the interest of self-improvement, we’ve created this optional
            form for you to provide your anonymous, honest feedback. Please let
            us know what you liked, what you despised, and most importantly, how
            you think we can do better next year.
          </StyledSpan>

          <StyledSpan>Looking forward to hearing from you soon!</StyledSpan>

          <Signature>&mdash; HackSC 2020 Sponsorship Team</Signature>
        </StyledBody>
        <SponsorFeedbackForm />
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

const Signature = styled.span`
  display: block;
  float: right;
  transform: skew(-10deg); /* no italics for our font */
`;

const StyledSpan = styled.span`
  margin-bottom: 1em;
  display: block;
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
  background: rgba(255, 83, 83, 0.13);
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

export default SponsorFeedback;
