import {
  Navbar,
  Hero,
  MetaTags,
  Details,
  Verticals,
  Footer
} from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - USC's largest hackathon" />

      <Navbar />
      <Hero />
      <Details />
      <Verticals />
      <Footer />
    </>
  );
};

export default Landing;
