import Head from "next/head";
import { AnimateSharedLayout, motion } from "framer-motion";

import { Hero } from "components/Hero";
import { DesktopNavbar, MobileNavbar } from "components/Navbar";
import { Container } from "components/Container";
import { Spacer } from "components/Spacer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Countable</title>
        <link rel="icon" href="/images/countable.png" />
      </Head>
      <DesktopNavbar />
      <AnimateSharedLayout>
        <MobileNavbar />
        <motion.div layout>
          <Spacer size={40} />
          <Container>
            <Hero />
          </Container>
        </motion.div>
      </AnimateSharedLayout>
    </>
  );
}
