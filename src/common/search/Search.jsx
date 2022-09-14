import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";
import styles from "./search.module.css";
const SearchBar = ({ filter }) => {
  const [value, setValue] = useState("");
  const dispatch = useProductsActions();
  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOPtion : filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <div>search for :</div>
      <input
        type="text"
        placeholder="search for ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;