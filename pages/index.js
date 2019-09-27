import Head from "next/head";
import styled from "styled-components";
import SvgTitle from "../assets/titleContent.svg";

// will delete unused declarations if we decide to use svg for title
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
        <NavBar></NavBar>

        <Main>
          <Header>
            {/* TODO: decide whether to use an svg or css to create title/header}
            {/* <TitleContainer> */}
            {/* want the 2020 to be stacked like:
                        20
                        20
              to the right of the HackSC*/}
            {/* <Flower>
                <img src={WhiteFlower} alt="White wire flower" />
              </Flower> */}
            {/* <TwentyRight>2020</TwentyRight> */}
            {/* <LogoText src={HackSC} alt="HackSC" />
              <HeaderTitle>JAN 31, 2020 - FEB 2, 2020</HeaderTitle>
              <HeaderSubtitle>LOS ANGELES, CALIFORNIA</HeaderSubtitle>
               */}
            <HeaderContent src={SvgTitle} />
            {/* </TitleContainer> */}

            {/* TODO: add form so ppl can subscribe to updates */}
          </Header>

          <Body>
            <RightBodyContainer>
              <BodyTitle>Details</BodyTitle>
              <BodySubtitle>All you need to know.</BodySubtitle>
              <BodyText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis feugiat vivamus at augue. Turpis egestas sed tempus
                urna. Vitae elementum curabitur vitae nunc sed. Non tellus orci
                ac auctor. Sed enim ut sem viverra aliquet eget. Varius vel
                pharetra vel turpis. Libero id faucibus nisl tincidunt eget.
                Enim lobortis scelerisque fermentum dui faucibus in ornare quam.
                Pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
                Tristique risus nec feugiat in fermentum posuere urna. Magna
                fringilla urna porttitor rhoncus dolor purus. Auctor urna nunc
                id cursus metus. Euismod elementum nisi quis eleifend.
              </BodyText>
            </RightBodyContainer>

            <BodyContainer>
              <BodyTitle>Social Justice</BodyTitle>
              <BodySubtitle>Let's make the world a better place.</BodySubtitle>
              <BodyText>
                Viverra accumsan in nisl nisi. Id neque aliquam vestibulum morbi
                blandit cursus. At ultrices mi tempus imperdiet nulla malesuada.
                Sit amet tellus cras adipiscing enim. Consectetur lorem donec
                massa sapien faucibus et. Quis auctor elit sed vulputate. At in
                tellus integer feugiat. Adipiscing diam donec adipiscing
                tristique risus nec. Sed euismod nisi porta lorem. Proin sed
                libero enim sed faucibus turpis in eu mi.
              </BodyText>
            </BodyContainer>

            <RightBodyContainer>
              <BodyTitle>FAQ</BodyTitle>
              <BodySubtitle>You asked, we answered.</BodySubtitle>
              <BodyText>
                Pellentesque elit eget gravida cum sociis. Amet dictum sit amet
                justo donec. Morbi non arcu risus quis. Eu facilisis sed odio
                morbi quis commodo odio aenean. Justo nec ultrices dui sapien
                eget mi proin sed. Egestas diam in arcu cursus euismod quis
                viverra. Habitant morbi tristique senectus et netus et.
              </BodyText>
            </RightBodyContainer>

            <BodyContainer>
              <BodyTitle>Sponsors</BodyTitle>
              <BodySubtitle>Thank you!</BodySubtitle>
              <BodyText>
                Morbi tincidunt augue interdum velit euismod in pellentesque
                massa placerat. Aliquam sem fringilla ut morbi. Praesent
                elementum facilisis leo vel fringilla est ullamcorper. Semper
                eget duis at tellus at urna condimentum mattis pellentesque. Nam
                at lectus urna duis convallis convallis. Amet dictum sit amet
                justo donec enim diam.
              </BodyText>
            </BodyContainer>
          </Body>
        </Main>

        {/* TODO: add footer */}
        {/* <Footer></Footer> */}
      </Container>
    </>
  );
};

// will delete unused declarations if we decide to use svg for title
const Container = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const Main = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  width: 93.75%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NavBar = styled.div`
  background-color: ${({ theme }) => theme.color.pink};
  height: 75px;
  width: 100%;
`;

const Header = styled.div`
  margin-top: 25px;
  margin: 25px auto;
  display: flex;
`;

const TitleContainer = styled.div`
  // position: relative;
`;

const LogoText = styled.img`
  width: 500px;
  position: absolute;
  top: 8px;
  right: 16px;
`;

const TwentyRight = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 800;
  vertical-align: super;
  text-align: right;

  color: ${({ theme }) => theme.color.red};
`;

const HeaderContent = styled.img`
  display: block;
  width: 1000px;
  margin: 50px auto;

  ${({ theme }) => theme.media.nearTablet`
  width: 95vw;
`};

  // ${({ theme }) => theme.media.tablet`
  //   width: 90vw;
  // `};
`;

const HeaderSubtitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 25px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.yellow};
`;

const Flower = styled.div`
  width: 400px;
  position: absolute;
  top: 10px;
  right: 20px;
  ${({ theme }) => theme.media.tablet`
    align-self: center;
    margin-bottom: 30px;
    position: relative;
  `};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 25px auto;
  font-weight: 400;
`;

const BodyContainer = styled.div``;

const RightBodyContainer = styled(BodyContainer)`
  text-align: right;
`;

const BodyTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  margin-top: 75px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.pink};
`;

const BodySubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  margin-top: 10px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.blue};
`;

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-top: 25px;
  line-height: 50px;
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

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 100px;
`;

export default Landing;
