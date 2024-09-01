import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import SearchBar from "../SearchBar/SearchBar";
import css from "./UserTable.module.css";

// import selectFilter from "../../redux/filtersSlice";

export default function UserTable() {
  const users = useSelector((state) => state.contacts.items);

  const filterName = useSelector((state) => state.filters.name);
  const filterUsername = useSelector((state) => state.filters.username);
  const filterEmail = useSelector((state) => state.filters.email);
  const filterPhone = useSelector((state) => state.filters.phone);

  const visibleUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filterName.toLowerCase()) &&
      user.username.toLowerCase().includes(filterUsername.toLowerCase()) &&
      user.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
      user.phone.toLowerCase().includes(filterPhone.toLowerCase())
  );

  return (
    <>
      <table className={css.table}>
        <thead className={css.thead}>
          <SearchBar />
          <tr>
            <th className={css.th}>Name</th>
            <th className={css.th}>Username</th>
            <th className={css.th}>Email</th>
            <th className={css.th}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((user) => (
            <tr className={css.tr} key={user.id}>
              <UserItem user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
