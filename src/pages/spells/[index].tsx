import { doc, getDoc } from "firebase/firestore";
import { GetStaticPropsContext, NextPage } from "next";
import { apiClient } from "../../api/Client";
import Header from "../../components/layouts/Header";
import { database } from "../../contexts/firebase/firebase-config";

const SpellDetail: NextPage<any> = ({ spellData }: { spellData: any }) => {
  return (
    <>
      <Header />
      <div>{spellData?.name}</div>
    </>
  );
};

export async function getStaticPaths() {
  let spellsData = [];
  const docRef = doc(database, "xanthars-data", "spells");
  const data = await getDoc(docRef);

  if (data?.exists()) {
    let result = await data.data();
    spellsData = Object.values(result);
  }

  return {
    paths:
      spellsData?.map(({ index }: { index: string }) => `/spells/${index}`) ??
      [],
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const response = await apiClient.get(`api/spells/${context.params?.index}`);
  const spellData = response.data;

  return {
    props: { spellData },
  };
}

export default SpellDetail;
