import Head from "next/head";

import { Hero } from "components/Hero";
import { DesktopNavbar, MobileNavbar } from "components/Navbar";
import { Container } from "components/Container";
import { Spacer } from "components/Spacer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopNavbar />
      <MobileNavbar />
      <Spacer size={40} />
      <Container>
        <Hero />
      </Container>
    </>
  );
}
