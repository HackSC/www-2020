import Head from "next/head";

import styled from "styled-components";

const Landing = () => {
  return (
    <>
      <Head>
        <title>HackSC 2020</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

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
        <Column>
          <Header>HackSC 2020</Header>
          <Subtitle>Coming back soon</Subtitle>
          <Button href="https://hacksc.com/apply">Apply as an organizer</Button>
          <SubLink href="https://2019.hacksc.com">
            See site for HackSC 2019
          </SubLink>
        </Column>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 0;
  display: flex;
`;

const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 800;
  color: ${({ theme }) => theme.color.dark};
  text-transform: uppercase;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.dark};
  margin-top: 32px;
  font-weight: 300;
`;

const Button = styled.a`
  background-color: #fba43a;
  border-radius: 26px;
  padding: 20px 30px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  margin-top: 32px;
  font-weight: 300;
`;

const SubLink = styled.a`
  margin-top: 16px;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.color.dark};
  text-decoration: none;
  font-weight: 300;
`;

export default Landing;
