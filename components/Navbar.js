import React from "react";
import styled from "styled-components";

import Logo from "../assets/header_logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <a href="/">
          <img src={Logo} width="169" alt="HackSC 2020 logo" />
        </a>

        <Links>
          <a href="/">Overview</a>
          {/*          <a href="/sponsor">Sponsorship</a>
           */}{" "}
          <a href="//2019.hacksc.com">HackSC '19</a>
        </Links>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 0 30px;
`;

const Container = styled.div`
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
  a {
    padding: 0 12px;
    color: #1c1c1c;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
  }

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

export default Navbar;
