import {
  Navbar,
  Hero,
  MetaTags,
  Details,
  Sponsors,
  Verticals,
  Footer,
  MLH
} from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - USC's largest hackathon" />

      <Navbar />
      <Hero />
      <Details />
      <Verticals />
      <Sponsors />
      <Footer />
      <MLH />
    </>
  );
};

export default Landing;
