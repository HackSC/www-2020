import styled from "styled-components";

import { Navbar, MetaTags, Footer, MLH } from "../components";

import { Header, Body, Bold } from "../components/type";

const Impact = () => {
  return (
    <>
      <MetaTags title="HackSC - Impact" />

      <Navbar />

      <Wrapper>
        <Header>Dear Hacker,</Header>
        <StyledBody>
          HackSC is an organization founded to empower <i>all</i> people to
          create, innovate, and enhance change. <br />
          We stand in solidarity with the countless Black victims of police
          brutality and racial discrimination. <br />
          Our country needs change that we can only create together. <br />
        </StyledBody>
        <Subheader>What we plan to do</Subheader>
        <StyledBody>
          From a combination of our internal funds and money raised by our
          organizing team, we will be matching donations to the following
          foundations and organizations up to <Bold>$880</Bold>.
        </StyledBody>
        <StyledBody>
          You can email a copy of your receipt from one of the organizations
          below to <a href="mailto:">wongkh@usc.edu</a>.
        </StyledBody>
        <Subheader>Where you come in</Subheader>
        <OrgsSection>
          <Orgs>
            <Org>
              <a href="https://www.fairvote.org/">
                <OrgLogo src="/static/logos/impact/fairvote.png" />
              </a>
              <OrgMission>
                FairVote is a nonpartisan champion of electoral reforms that
                give voters greater choice, a stronger voice, and a
                representative democracy that works for all Americans.
              </OrgMission>
              <a href="https://www.fairvote.org/donate">
                <DonateButton>Donate</DonateButton>
              </a>
            </Org>
            <Org>
              <a href="https://blacklivesmatter.com/">
                <OrgLogo src="/static/logos/impact/blm.png" />
              </a>
              <OrgMission>
                Black Lives Matter Foundation, Inc is a global organization in
                the US, UK, and Canada, whose mission is to eradicate white
                supremacy and build local power to intervene in violence
                inflicted on Black communities.
              </OrgMission>
              <a href="https://secure.actblue.com/donate/ms_blm_homepage_2019">
                <DonateButton>Donate</DonateButton>
              </a>
            </Org>
            <Org>
              <a href="https://www.blackgirlscode.com/">
                <OrgLogo src="/static/logos/impact/bgc.png" />
              </a>
              <OrgMission>
                Black Girls Code's goal is to increase the number of women of
                color in the digital space by empowering girls of color ages 7
                to 17 to become innovators in STEM fields, leaders in their
                communities, and builders of their own futures.
              </OrgMission>
              <a href="https://www.blackgirlscode.com/">
                <DonateButton>Donate</DonateButton>
              </a>
            </Org>
            <Org>
              <a href="http://youthjusticela.org/" style={{ height: 130 }}>
                <OrgLogo
                  style={{
                    display: "flex",
                    width: "80%",
                    height: "80%",
                    margin: "0 auto"
                  }}
                  src="/static/logos/impact/yjc.png"
                />
              </a>
              <OrgMission>
                The Youth Justice Coalition is working to build a youth, family,
                and formerly and currently incarcerated people’s movement to
                challenge America’s addiction to race, gender and class
                discrimination.
              </OrgMission>
              <a href="http://youthjusticela.org/">
                <DonateButton>Donate</DonateButton>
              </a>
            </Org>
            <Org>
              <a href="https://www.blackcharities.net/" style={{ height: 120 }}>
                <OrgLogo
                  style={{
                    display: "flex",
                    width: "70%",
                    height: "70%",
                    margin: "0 auto"
                  }}
                  src="/static/logos/impact/ibc.png"
                />
              </a>
              <OrgMission>
                Together with community partnerships across the country and
                IBC’s 100’s of affiliated local non-profit organizations, we
                produce successful outcomes to meet the needs of children,
                families and communities, locally, nationally and
                internationally.
              </OrgMission>
              <a href="https://www.blackcharities.net/">
                <DonateButton>Donate</DonateButton>
              </a>
            </Org>
          </Orgs>
        </OrgsSection>
      </Wrapper>

      <Footer />
      <MLH />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 93.75%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 75px;
  padding-bottom: 75px;
  flex-direction: column;
`;

const BodyParagraph = styled.div`
  margin-bottom: 10px;
`;

const StyledBody = styled(Body)`
  font-size: 20px;
  line-height: 30px;
  margin-top: 12px;
`;

const OrgsSection = styled.div`
  padding: 24px 0;
`;

const Subheader = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Orgs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Org = styled.div`
  padding: 12px;
  flex-basis: 30%;
  background: peach;
  height: 315px;
  background: rgba(255, 83, 83, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.media.tablet`
    margin: 0 auto;
    flex-basis: 70%;
    margin-bottom: 15px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin: 0 auto;
    flex-basis: 100%;
  `}
`;

const OrgTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 600;
`;
const OrgMission = styled.p`
  color: #ff5353;
  line-height: 22px;
  font-size: 18px;
  margin-bottom: 8px;
  flex-grow: 1;
`;

const OrgLogo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const DonateButton = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #ff8379;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  width: 100%;
`;
export default Impact;
