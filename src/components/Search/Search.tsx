import styles from "./Search.module.scss";

interface SearchProps {
  placeholder: string;
  OnSearch: CallableFunction;
}

const Search = ({ placeholder, OnSearch }: SearchProps) => {
  return (
    <div className={styles.container}>
      <input
        role="search"
        placeholder={placeholder}
        onKeyUp={(e) => OnSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
