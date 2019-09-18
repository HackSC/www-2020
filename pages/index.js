import Head from "next/head";

import styled from "styled-components";

import HackSC from "../assets/hacksc.svg";
import WhiteFlower from "../assets/white_flower.svg";

const Landing = () => {
  return (
    <>
      <Head>
        <title>HackSC 2020</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="HackSC 2020. USC's premier hackathon, coming back soon."
        ></meta>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-127488741-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-127488741-1');
          `
          }}
        />

        <link rel="icon" type="image/png" href="/static/favicon.png" />
      </Head>
      <Container>
        <Main>
          <LogoText src={HackSC} alt="HackSC" />
          <Header>Out for lunch.</Header>
          <Subtitle>Returning with more news this fall.</Subtitle>
          <Links>
            <Button href="https://2019.hacksc.com">
              See site for HackSC 2019
            </Button>
          </Links>
        </Main>
        <Flower>
          <img src={WhiteFlower} alt="White wire flower" />
        </Flower>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 720px;
  width: 93.75%;
  margin: 0 auto;
  padding: 72px 0;
  display: flex;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column-reverse;
  `};
`;

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => theme.media.tablet`
    align-items: center;
  `};
`;

const LogoText = styled.img`
  margin-bottom: 24px;
`;

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 800;
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-top: 16px;
  font-weight: 300;

  ${({ theme }) => theme.media.tablet`
    text-align: center;
  `};
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `};
`;

const Button = styled.a`
  background-color: #ffffff;
  border-radius: 48px;
  padding: 20px 40px;
  color: #bc1e1e;
  font-size: 18px;
  text-decoration: none;
  font-weight: 300;
`;

const SubLink = styled.a`
  margin-left: 18px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-weight: 300;

  ${({ theme }) => theme.media.tablet`
    margin-top: 16px;
  `};
`;

const Flower = styled.div`
  ${({ theme }) => theme.media.tablet`
    align-self: center;
    margin-bottom: 32px;
  `};
`;

export default Landing;
