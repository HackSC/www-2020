import React from "react";
import styled from "styled-components";

import Logo from "../assets/header_logo.png";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <img src={Logo} width="169" alt="HackSC 2020 logo" />
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
`;

export default Navbar;
