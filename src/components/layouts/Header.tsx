import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.banner} role="banner">
      <Link href="/">
        <span className={styles.header}>
          <span className={styles.golden}>Xanthar&apos;s</span> Tome of
          Everything
        </span>
      </Link>
    </div>
  );
};
export default Header;
