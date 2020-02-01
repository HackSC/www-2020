import React from "react";

import styled from "styled-components";

const Sponsor = ({ source, malibu, venicePlus, href }) => {
  return (
    <SponsorLogoImg
      href={href ? href : "#"}
      malibu={malibu ? 1 : 0}
      venicePlus={venicePlus ? 1 : 0}
      target="_blank"
    >
      <img src={source} />
    </SponsorLogoImg>
  );
};

const SponsorLogos = () => (
  <LogosContainer>
    <LogoGroup>
      <Sponsor 
        source="/static/logos/accenture-malibu.jpg" 
        href="https://www.accenture.com/"
        malibu 
      />
      <Sponsor 
        source="/static/logos/alwaysai-malibu.svg" 
        href="https://alwaysai.co/"
        malibu
      />
      <Sponsor 
        source="/static/logos/machenike-malibu.png" 
        href="https://www.machenike.com/"
        malibu
      />
      <Sponsor 
        source="/static/logos/n3twork-malibu.png"
        href="https://n3twork.com/"
        malibu
      />
    </LogoGroup>

    <LogoGroup>
      <Sponsor 
        source="/static/logos/mux-veniceplus.svg"
        href="https://mux.com/"
        venicePlus
      />
      <Sponsor 
        source="/static/logos/xpring-veniceplus.png"
        href="https://xpring.io/"
        venicePlus
      />
    </LogoGroup>

    <LogoGroup>
      <Sponsor 
        source="/static/logos/gcp-venice.png"
        href="https://cloud.google.com/"
      />
      <Sponsor 
        source="/static/logos/linode-venice.svg"
        href="https://www.linode.com/"  
      />
      <Sponsor 
        source="/static/logos/nimbella-venice.svg"
        href="https://nimbella.com/"
      />
      <Sponsor 
        source="/static/logos/teleportal-venice.svg"
        href="https://teleportal.dev/"
      />
      <Sponsor 
        source="/static/logos/way2b1-venice.svg"
        href="https://www.way2b1.com/"
      />
      <Sponsor
        source="/static/logos/ledu-venice.svg"
        href="https://www.education-ecosystem.com/"
      />
    </LogoGroup>

    <LogoGroup>
      <Sponsor
        source="/static/logos/stickermule-inkind.svg"
        href="http://hackp.ac/mlh-stickermule-hackathons"
      />
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

const SponsorLogoImg = styled.a`
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 15px;

  ${({ venicePlus, malibu }) =>
    malibu ? `width: 33%;` : venicePlus ? `width: 22%` : `width: 18%;`}

  ${({ theme }) => theme.media.tablet`
    width: 50%;
  `}

  img {
    width: 100%;
  }
`;

export default SponsorLogos;
