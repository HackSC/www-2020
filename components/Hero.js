import React, { useRef } from "react";

import styled from "styled-components";

import DotFlower from "../assets/dot_flower.png";
import Hand from "../assets/hero_hand_la.png";
import GradientBlob from "../assets/hero_gradient_blob.png";
import Lines from "../assets/hero_lines_decoration.png";

const Hero = () => {
  const emailRef = useRef(null);

  const submitEmail = e => {
    // TODO: Write e-mail to API
  };

  return (
    <Container>
      <Wrapper>
        <CTA>
          <Header>
            The future is in your hands at <Rainbow>HackSC 2020</Rainbow>
          </Header>
          <Date>01.31.20 - 02.02.20</Date>
          <Content>
            <Bold>HackSC</Bold> is the University of Southern California’s
            largest hackathon. This year, we’re focused on bringing{" "}
            <em>
              <Bold>real</Bold>
            </em>{" "}
            solutions to those in need by pushing the boundaries of technology,
            innovation, and collaboration.
          </Content>

          <EmailForm>
            <input type="email" placeholder="Email" ref={emailRef} />
            <button onClick={submitEmail}>Stay Up to Date</button>
          </EmailForm>

          <FormContext>
            Subscribe to be notified of HackSC 2020 events, including when our
            application opens.
          </FormContext>
        </CTA>
        <DotFlowerLeft src={DotFlower} />
        <HandGraphic src={Hand} />
        <GradientBlobGraphic src={GradientBlob} />
        <LinesGraphic src={Lines} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 200px;
  padding-bottom: 200px;
  position: relative;
`;

const CTA = styled.div`
  width: 550px;
`;

const DotFlowerLeft = styled.img`
  position: absolute;
  left: -90px;
  top: 170px;
  z-index: -8;

  animation-name: fade;
  animation-duration: 1.5s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const HandGraphic = styled.img`
  position: absolute;
  left: -300%;
  z-index: -5;
  max-width: 1000px;
  animation-name: zoomzoom;
  animation-duration: 1.5s;
  animation-delay: 0.25s;
  animation-fill-mode: forwards;

  @keyframes zoomzoom {
    from {
      left: -200%;
      opacity: 0;
    }
    to {
      left: -65%;
      opacity: 1;
    }
  }
`;

const GradientBlobGraphic = styled.img`
  position: absolute;
  left: -50px;
  top: -30px;
  z-index: -10;
  max-width: 700px;
  animation-name: fade;
  animation-duration: 1.5s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LinesGraphic = styled.img`
  position: absolute;
  left: -20%;
  top: 55%;
  z-index: -10;
  max-width: 700px;
  animation-name: fade;
  animation-duration: 1.5s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Header = styled.h1`
  font-weight: 700;
  font-size: 48px;
  font-style: italic;
`;

const Rainbow = styled.span`
  background: -webkit-linear-gradient(0deg, #feda22, #ff8379);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 8px;
`;

const Date = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin: 12px 0;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const EmailForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  input[type="email"] {
    flex-basis: 55%;
    border-radius: 8px;
    border: 1px solid #b2b2b2;
    padding: 12px 16px;
    font-weight: 600;
    color: #b2b2b2;
    font-size: 16px;
  }

  button {
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    background: #ff8379;
    flex-grow: 1;
    margin-left: 16px;
    font-size: 12px;
    color: #ffffff;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }
`;

const FormContext = styled.p`
  color: #757575;
  font-size: 14px;
`;

export default Hero;