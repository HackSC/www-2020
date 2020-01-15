import React from "react";

import styled from "styled-components";

const Sponsor = ({ source, malibu, venicePlus }) => {
  return (
    <SponsorLogoImg
      src={source}
      malibu={malibu ? 1 : 0}
      venicePlus={venicePlus ? 1 : 0}
    />
  );
};

const SponsorLogos = () => (
  <LogosContainer>
    <LogoGroup>
      <Sponsor source="/static/logos/accenture-malibu.jpg" malibu />
      <Sponsor source="/static/logos/alwaysai-malibu.svg" malibu />
      <Sponsor source="/static/logos/machenike-malibu.png" malibu />
      <Sponsor source="/static/logos/n3twork-malibu.svg" malibu />
    </LogoGroup>

    <LogoGroup>
      <Sponsor source="/static/logos/mux-veniceplus.svg" venicePlus />
      <Sponsor source="/static/logos/xpring-veniceplus.png" venicePlus />
    </LogoGroup>

    <LogoGroup>
      <Sponsor source="/static/logos/gcp-venice.png" />
      <Sponsor source="/static/logos/linode-venice.svg" />
      <Sponsor source="/static/logos/nimbella-venice.svg" />
      <Sponsor source="/static/logos/teleportal-venice.svg" />
      <Sponsor source="/static/logos/way2b1-venice.svg" />
      <Sponsor source="/static/logos/algorand-venice.svg" />
    </LogoGroup>
  </LogosContainer>
);

const LogosContainer = styled.div`
  margin: 24px 0 48px;
`;

const LogoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

const SponsorLogoImg = styled.img`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;

  ${({ venicePlus, malibu }) =>
    malibu
      ? `max-width: 25%;`
      : venicePlus
      ? `max-width: 18%`
      : `max-width: 14%;`}

  ${({ theme }) => theme.media.tablet`
    max-width: 50%;
  `}
`;

export default SponsorLogos;
