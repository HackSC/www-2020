import { Navbar, Hero, MetaTags, Details, Verticals } from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - USC's largest hackathon" />

      <Navbar />
      <Hero />
      <Details />
      <Verticals />
    </>
  );
};

export default Landing;
