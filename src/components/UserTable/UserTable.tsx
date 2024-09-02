import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import SearchBar from "../SearchBar/SearchBar";
import { selectUser } from "../../redux/contactsSlice";
import {
  selectName,
  selectUsername,
  selectEmail,
  selectPhone,
} from "../../redux/filtersSlice";
import { User } from "../UserItem/UserItem.types";
import css from "./UserTable.module.css";

export default function UserTable() {
  const users = useSelector(selectUser) as User[];

  const filterName = useSelector(selectName);
  const filterUsername = useSelector(selectUsername);
  const filterEmail = useSelector(selectEmail);
  const filterPhone = useSelector(selectPhone);

  const visibleUsers = users.filter(
    (user: User) =>
      user.name.toLowerCase().includes(filterName.toLowerCase()) &&
      user.username.toLowerCase().includes(filterUsername.toLowerCase()) &&
      user.email.toLowerCase().includes(filterEmail.toLowerCase()) &&
      user.phone.toLowerCase().includes(filterPhone.toLowerCase())
  );

  return (
    <div className={css.scroll}>
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
    </div>
  );
}
