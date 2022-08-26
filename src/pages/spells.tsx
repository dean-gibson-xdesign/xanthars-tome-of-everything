import { doc, DocumentData, getDoc } from "firebase/firestore";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ISpell } from "../api/firebase-build/GetSpells";
import ItemList from "../components/ItemList/ItemList";
import Header from "../components/layouts/Header";
import Spell from "../components/Spell/Spell";
import { database } from "../contexts/firebase/firebase-config";

type SpellsProps = {
  spellsData: ISpell[];
};

const Spells: NextPage<SpellsProps> = ({ spellsData }) => {
  const [spells, setSpells] = useState(spellsData);

  const filterSpells = (value: string): void => {
    if (value == "") {
      setSpells(spellsData);
    }

    const filteredSpells = spellsData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setSpells(filteredSpells);
  };

  return (
    <>
      <Head>
        <title>Xanthar&apos;s | Spells</title>
        <meta
          name="spells"
          content="List of all spells available in Dungeons and Dragons 5th Edition"
        />
      </Head>
      <Header />
      <main>
        <ItemList OnSearch={(e: string) => filterSpells(e)}>
          {spells.map((spell) => {
            return (
              <div key={spell._id}>
                <Spell spell={spell} />
              </div>
            );
          })}
        </ItemList>
      </main>
    </>
  );
};

export async function getStaticProps(context: GetStaticProps) {
  let spellsData: DocumentData | {} = {};

  const docRef = doc(database, "xanthars-data", "spells");
  const data = await getDoc(docRef);

  if (data?.exists()) {
    let result = await data.data();
    spellsData = Object.values(result);
  }

  return {
    props: {
      spellsData,
    },
  };
}

export default Spells;
