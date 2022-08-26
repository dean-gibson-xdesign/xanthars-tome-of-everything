import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layouts/Header";

const Equipment: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xanthar&apos;s | Equipment</title>
        <meta
          name="equipment"
          content="List of all equipment available in Dungeons and Dragons 5th Edition"
        />
      </Head>
      <Header />
      <div>Equipment!!!</div>
    </>
  );
};

export default Equipment;
