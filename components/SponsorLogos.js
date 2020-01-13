import React from "react";

import styled from "styled-components";

const SponsorLogos = () => (
  <LogosContainer>
    <h1>Sponsor</h1>

    <VeniceSponsor></VeniceSponsor>

    <VenicePlusSponsor></VenicePlusSponsor>

    <MalibuSponsor></MalibuSponsor>
  </LogosContainer>
);

const LogosContainer = styled.div`
  margin: 24px 0;
`;

const Sponsor = styled.div``;

const VeniceSponsor = styled(Sponsor)``;
const VenicePlusSponsor = styled(Sponsor)``;
const MalibuSponsor = styled(Sponsor)``;

export default SponsorLogos;
