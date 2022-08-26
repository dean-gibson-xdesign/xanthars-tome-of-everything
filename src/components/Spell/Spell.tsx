import Image from "next/image";
import Link from "next/link";
import { ISpell } from "../../api/firebase-build/GetSpells";
import styles from "./Spell.module.scss";

type SpellProps = {
  spell: ISpell;
};

const Spell = ({ spell }: SpellProps) => {
  return (
    <>
      <Link href={`/spells/${spell.index}`}>
        <div className={styles.container}>
          <div className={styles.schoolImage}>
            <Image
              src={`/schools/${spell.school.toLowerCase()}.png`}
              width="40px"
              height="40px"
              alt={spell.school}
            />
          </div>
          <div className={styles.nameContainer}>
            <div className={styles.name}>
              <span>{spell.name}</span>
            </div>
            <div
              className={`${styles.school} ${
                styles[spell.school.toLowerCase()]
              }`}
            >
              <span>{spell.school}</span>
            </div>
          </div>

          <div>
            <span className={styles.label}>Level: </span>
            <span>{spell.level}</span>
          </div>

          <div className={styles.duration}>
            <span className={styles.label}>Cast Time: </span>
            <span>{spell.duration}</span>
          </div>

          <div>
            <span className={styles.label}>Range: </span>
            <span>{spell.range}</span>
          </div>

          <div className={styles.description}>
            <p>{spell.desc[0]}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Spell;
