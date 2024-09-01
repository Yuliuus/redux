import css from "../SearchBar/SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter } from "../../redux/filtersSlice";
import { Field } from "formik";

export default function SearchBox({ name, placeholder }) {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters[name]); // Select filter value by name

  const handleChange = (e) => {
    dispatch(changeTextFilter({ field: name, value: e.target.value })); // Dispatch action to change filter
  };

  return (
    <th className={css.th}>
      <Field
        type="text"
        name={name}
        placeholder={placeholder}
        value={filterValue}
        onChange={handleChange}
      />
    </th>
  );
}
