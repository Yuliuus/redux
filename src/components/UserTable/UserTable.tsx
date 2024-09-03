import { useSelector } from "react-redux";
import UserItem from "../UserItem/UserItem";
import SearchBar from "../SearchBar/SearchBar";
import { selectVisibleUsers } from "../../redux/filters/filtersSelectors";
import { User } from "../UserItem/UserItem.types";
import css from "./UserTable.module.css";

export default function UserTable() {
  const visibleUsers = useSelector(selectVisibleUsers) as User[];

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
          {visibleUsers.map((user: User) => (
            <tr className={css.tr} key={user.id}>
              <UserItem user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
