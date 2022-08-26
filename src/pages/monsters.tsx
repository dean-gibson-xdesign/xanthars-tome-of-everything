import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layouts/Header";

const Monsters: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xanthar&apos;s | Monsters</title>
        <meta
          name="monsters"
          content="List of all monsters available in Dungeons and Dragons 5th Edition"
        />
      </Head>
      <Header />
      <div>Monsters!!!</div>
    </>
  );
};

export default Monsters;
