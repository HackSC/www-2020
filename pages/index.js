import Head from "next/head";

import styled from "styled-components";

import { Navbar, Hero } from "../components";

const Landing = () => {
  return (
    <>
      <Head>
        <title>HackSC 2020 - USC's largest hackathon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="USC's largest hackathon. The future is in your hands at HackSC 2020."
        ></meta>

        <meta property="og:url" content="https://hacksc.com" />
        <meta
          property="og:title"
          content="HackSC 2020 - USC's largest hackathon"
        />
        <meta
          property="og:description"
          content="USC's largest hackathon. The future is in your hands at HackSC 2020."
        />

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

      <Navbar />
      <Hero />
    </>
  );
};

export default Landing;
