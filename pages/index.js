import Head from "next/head";
// import Header from './components/Header'

import styled from "styled-components";

import HackSC from "../assets/hacksc.svg";
import WhiteFlower from "../assets/white_flower.svg";

const Ava = () => {
  return <p>hi!</p>;
};
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
          <Header>
            <TitleContainer>
              {/* want the 2020 to be stacked like:
                        20
                        20
              to the right of the HackSC*/}
              <TwentyRight>2020</TwentyRight>
              <LogoText src={HackSC} alt="HackSC" />
              <HeaderTitle>JAN 31, 2020 - FEB 2, 2020</HeaderTitle>
              <HeaderSubtitle>LOS ANGELES, CALIFORNIA</HeaderSubtitle>
            </TitleContainer>

            <Links>{/* <Button>
              </Button> */}</Links>
          </Header>

          <Body>
            <BodyTitle>Details</BodyTitle>
            <BodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lobortis feugiat vivamus at augue. Turpis egestas sed tempus urna.
              Vitae elementum curabitur vitae nunc sed. Non tellus orci ac
              auctor. Sed enim ut sem viverra aliquet eget. Varius vel pharetra
              vel turpis. Libero id faucibus nisl tincidunt eget. Enim lobortis
              scelerisque fermentum dui faucibus in ornare quam. Pellentesque eu
              tincidunt tortor aliquam nulla facilisi cras. Tristique risus nec
              feugiat in fermentum posuere urna. Magna fringilla urna porttitor
              rhoncus dolor purus. Auctor urna nunc id cursus metus. Euismod
              elementum nisi quis eleifend.
            </BodyText>

            <BodyTitle>Social Justice</BodyTitle>
            <BodyText>
              Viverra accumsan in nisl nisi. Id neque aliquam vestibulum morbi
              blandit cursus. At ultrices mi tempus imperdiet nulla malesuada.
              Sit amet tellus cras adipiscing enim. Consectetur lorem donec
              massa sapien faucibus et. Quis auctor elit sed vulputate. At in
              tellus integer feugiat. Adipiscing diam donec adipiscing tristique
              risus nec. Sed euismod nisi porta lorem. Proin sed libero enim sed
              faucibus turpis in eu mi.
            </BodyText>

            <BodyTitle>FAQ</BodyTitle>
            <BodyText>
              Pellentesque elit eget gravida cum sociis. Amet dictum sit amet
              justo donec. Morbi non arcu risus quis. Eu facilisis sed odio
              morbi quis commodo odio aenean. Justo nec ultrices dui sapien eget
              mi proin sed. Egestas diam in arcu cursus euismod quis viverra.
              Habitant morbi tristique senectus et netus et.
            </BodyText>

            <BodyTitle>Sponsors</BodyTitle>
            <BodyText>
              Morbi tincidunt augue interdum velit euismod in pellentesque massa
              placerat. Aliquam sem fringilla ut morbi. Praesent elementum
              facilisis leo vel fringilla est ullamcorper. Semper eget duis at
              tellus at urna condimentum mattis pellentesque. Nam at lectus urna
              duis convallis convallis. Amet dictum sit amet justo donec enim
              diam.
            </BodyText>

            <BodyTitle>Contact</BodyTitle>
            <BodyText>
              Neque viverra justo nec ultrices. Ac feugiat sed lectus vestibulum
              mattis ullamcorper velit sed ullamcorper. Scelerisque purus semper
              eget duis at. Malesuada bibendum arcu vitae elementum. Quis lectus
              nulla at volutpat diam ut. Est velit egestas dui id ornare arcu
              odio ut. Sodales neque sodales ut etiam. Quis varius quam quisque
              id diam vel quam elementum.
            </BodyText>
          </Body>
        </Main>
        <Flower>
          <img src={WhiteFlower} alt="White wire flower" />
        </Flower>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 1080px;
  width: 93.75%;
  margin: 0 auto;
  padding: 25px 0;
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

const Header = styled.div`
  margin-top: 25px;
  ${({ theme }) => theme.media.tablet`
    text-align: center;
`};
`;

const TitleContainer = styled.div`
  width: 500px;
`;

const LogoText = styled.img`
  width: 400px;
`;

const TwentyRight = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 800;
  vertical-align: super;
  text-align: right;

  color: ${({ theme }) => theme.color.red};
`;

const HeaderTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 25px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.pink};
`;

const HeaderSubtitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 25px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.yellow};
`;

const Flower = styled.div`
  ${({ theme }) => theme.media.tablet`
    align-self: center;
    margin-bottom: 30px;
  `};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 25px;
  font-weight: 400;
`;

const BodyTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  margin-top: 74px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.yellow};
`;

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-top: 25px;
  line-height: 50px;
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

export default Landing;
