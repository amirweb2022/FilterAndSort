import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/search/Search";
const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOPtion) => {
    dispatch({ type: "filter", selectedOPtion });
    dispatch({ type: "sort", selectedOPtion: sort });
    setFilter(selectedOPtion);
  };
  const sortHandler = (selectedOPtion) => {
    dispatch({ type: "sort", selectedOPtion });
    setSort(selectedOPtion);
  };

  const filterOptions = [
    { value: "", label: "All" },
    { value: "XS", label: "XS" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];
  const sortOptions = [
    { value: "highest", label: "Highest" },
    { value: "lowest", label: "Lowest" },
  ];
  return (
    <section>
      <SearchBar filter={filter}/>
      <div className={styles.filter}>
      <p>filter products based on:</p>
      <SelectComponent
        title="filter by size"
        value={filter}
        onChange={filterHandler}
        options={filterOptions}
      />
      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
      </div>
    </section>
  );
};
export default Filter;