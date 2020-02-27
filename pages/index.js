import {
  Navbar,
  Hero,
  MetaTags,
  Successes,
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
      <Successes />
      <Sponsors />
      <Footer />
    </>
  );
};

export default Landing;
