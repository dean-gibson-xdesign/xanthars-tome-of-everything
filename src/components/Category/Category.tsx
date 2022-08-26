import Link from "next/link";
import styles from "./Category.module.scss";

export interface CategoryProp {
  id: string;
  title: string;
  description: string;
}

const Category = ({ id, title, description }: CategoryProp) => {
  return (
    <Link href={`/${title.toLowerCase()}`}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Category;
