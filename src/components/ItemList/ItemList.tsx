import Search from "../Search/Search";
import styles from "./ItemList.module.scss";

const ItemList = ({
  children,
  OnSearch,
}: {
  children: React.ReactNode;
  OnSearch: CallableFunction;
}) => {
  return (
    <div className={styles.container}>
      <Search
        placeholder="Search for an item..."
        OnSearch={(e: string) => OnSearch(e)}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ItemList;
