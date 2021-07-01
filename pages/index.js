import Head from "next/head";

import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
