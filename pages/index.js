import Head from "next/head";

import { Hero } from "components/Hero";
import { Navbar } from "components/Navbar";
import { Container } from "components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </>
  );
}
