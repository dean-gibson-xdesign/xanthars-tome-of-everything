import { CategoryProp } from "../Category";
import Category from "../Category/Category";
import styles from "./CategoryList.module.scss";

export interface CategoryListProps {
  items: CategoryProp[];
}

const CategoryList = ({ items }: CategoryListProps) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item: CategoryProp) => {
        return <Category key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CategoryList;
