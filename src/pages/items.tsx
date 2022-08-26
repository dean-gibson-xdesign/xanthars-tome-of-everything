import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layouts/Header";

const Items: NextPage = () => {
  return (
    <>
      <Head>
        <title>Xanthar&apos;s | Items</title>
        <meta
          name="items"
          content="List of all items available in Dungeons and Dragons 5th Edition"
        />
      </Head>
      <Header />
      <div>Items!!!</div>
    </>
  );
};

export default Items;
