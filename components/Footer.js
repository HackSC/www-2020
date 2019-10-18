import styled from "styled-components";

import { Body, Bold } from "./type";

import Logo from "../assets/logo.png";
import Email from "../assets/email.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Medium from "../assets/medium.svg";
import Twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Row>
        <SocialColumn>
          <LogoGraphic src={Logo} />
          <Links>
            <a href="mailto:hackers@hacksc.com">
              <img src={Email} />
            </a>
            <a href="#">
              <img src={Facebook} />
            </a>
            <a href="#">
              <img src={Instagram} />
            </a>
            <a href="#">
              <img src={Medium} />
            </a>
            <a href="#">
              <img src={Twitter} />
            </a>
          </Links>
          <Copyright>HackSC 2019 &copy;</Copyright>
        </SocialColumn>

        <LinksColumn>
          <Bold>HackSC</Bold>
          <a href="https://hacksc.com">Overview</a>
          <a
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            target="_blank"
          >
            MLH Code of Conduct
          </a>
        </LinksColumn>

        <ContactColumn>
          <Bold>Contact us</Bold>
          <ContactBody>
            Reach out to us at{" "}
            <a href="mailto:hackers@hacksc.com">hackers@hacksc.com</a> or on
            social media if you have any questions, want more information, or
            want to talk about sponsorship!
          </ContactBody>
        </ContactColumn>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f6f6f6;
  padding-top: 64px;
  padding-bottom: 64px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

const LogoGraphic = styled.img`
  width: 200px;
`;

const SocialColumn = styled(Column)`
  width: 35%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const LinksColumn = styled(Column)`
  width: 25%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const ContactColumn = styled(Column)`
  width: 40%;
  padding: 0 32px;
  box-sizing: border-box;
`;

const ContactBody = styled(Body)`
  margin-top: 16px;
`;

const Links = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    display: inline-flex;
  }
`;

const Copyright = styled.p`
  font-size: 18px;
  color: #b2b2b2;
`;

export default Footer;
