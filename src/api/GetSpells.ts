import { AxiosResponse } from "axios";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../contexts/firebase/firebase-config";
import { apiClient } from "./Client";
export interface ISpell {
  _id: string;
  index: string;
  name: string;
  desc: string[];
  school: string;
  concentration: boolean;
  range?: string;
  duration: string;
  casting_time: string;
  level: number;
}

export const getSpells = async (): Promise<ISpell[]> => {
  return new Promise(async (resolve, reject) => {
    console.log("Fetching spells...");
    await apiClient.get("api/spells").then((response) => {
      buildSpellData(response.data?.results).then(async (spellsList) => {
        await setDoc(doc(database, "xanthars-data", "spells"), {
          ...spellsList,
        });
        console.log("Finished fetching spells!");
        resolve(spellsList);
      });
    });
  });
};

const buildSpellData = (data: any[]): Promise<ISpell[]> => {
  return new Promise(async (resolve, reject) => {
    const spells: ISpell[] = [];

    for (const item of data) {
      await apiClient
        .get(item?.url)
        .then((spellData: AxiosResponse<any, ISpell>) => {
          const {
            _id,
            index,
            name,
            desc,
            concentration,
            range,
            school,
            duration,
            casting_time,
            level,
          } = spellData.data;
          spells.push({
            _id,
            index,
            name,
            desc,
            concentration,
            range,
            duration,
            school: school?.name,
            casting_time,
            level,
          });
        });
    }
    resolve(spells);
  });
};
