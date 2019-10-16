import { Navbar, Hero, MetaTags, Details } from "../components";

const Landing = () => {
  return (
    <>
      <MetaTags title="HackSC 2020 - USC's largest hackathon" />

      <Navbar />
      <Hero />
      <Details />
    </>
  );
};

export default Landing;
