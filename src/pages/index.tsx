import type { NextPage } from "next";
import Head from "next/head";
import { CategoryProp } from "../components/Category";
import CategoryList from "../components/CategoryList/CategoryList";
import Header from "../components/layouts/Header";

const Home: NextPage = () => {
  const items: CategoryProp[] = [
    {
      title: "Spells",
      description: "Castable spells and magic abilities",
      id: "spells",
    },
    {
      title: "Equipment",
      description: "Armor, Weapons and other usable items.",
      id: "equipment",
    },
    {
      title: "Monsters",
      description: "Enemies, NPC's and More!",
      id: "monsters",
    },
    {
      title: "Items",
      description: "Everything you can think of!",
      id: "items",
    },
  ];
  return (
    <div>
      <Head>
        <title>Xanthar&apos;s Tome of Everything</title>
        <meta
          name="description"
          content="Tool to display all spells/equipment/items in D&D"
        />
      </Head>
      <Header />
      <main>
        <CategoryList items={items}></CategoryList>
      </main>
    </div>
  );
};

export default Home;
