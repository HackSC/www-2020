import Head from "next/head";

import styled from "styled-components";

import { Header, Hero } from "../components";

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

      <Header />
      <Hero />
    </>
  );
};

export default Landing;
