import css from "../SearchBar/SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/filtersSelectors";
import { changeTextFilter } from "../../redux/filters/filtersSlice";
import { Field } from "formik";

type SearchBoxProps = {
  name: string;
  placeholder: string;
};

export default function SearchBox({ name, placeholder }: SearchBoxProps) {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTextFilter({ field: name, value: e.target.value }));
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
