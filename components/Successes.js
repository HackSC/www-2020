import styled from "styled-components";

const Successes = () => (
  <Wrapper>
    <StatsSection>
      <Subheader>Last Year's Successes</Subheader>

      <Stats>
        <Stat>
          <Number>36</Number> hours of hacking
        </Stat>
        <Stat>
          <Number>700+</Number> attendees
        </Stat>
        <Stat>
          <Number>4600</Number> tasks completed
        </Stat>
        <Stat>
          <Number>1100+</Number> meals served
        </Stat>

        <Stat>
          <Number>50+</Number> schools represented
        </Stat>
        <Stat>
          <Number>128</Number> projects submitted
        </Stat>
        <Stat>
          <Number>365</Number> workshop check-ins
        </Stat>
        <Stat>
          <Number>121</Number> puppy enthusiasts
        </Stat>

        <Stat>
          <Number>88</Number> arranged succulents
        </Stat>
        <Stat>
          <Number>88</Number> cookies decorated
        </Stat>
        <Stat>
          <Number>10.6M</Number> points awarded
        </Stat>
        <Stat>
          <Number>too much</Number> caffeine consumed
        </Stat>
      </Stats>
    </StatsSection>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  flex-direction: column;
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

export default Successes;
