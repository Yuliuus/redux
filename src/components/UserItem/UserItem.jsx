import css from "./UserItem.module.css";
import { phoneFilter } from "../../helpers/phoneFilter";

export default function UserItem({ user: { name, username, email, phone } }) {
  const normalizedPhone = phoneFilter(phone);

  return (
    <>
      <td className={css.td}>{name}</td>
      <td className={css.td}>{username}</td>
      <td className={css.td}>{email}</td>
      <td className={css.td}>{normalizedPhone}</td>
    </>
  );
}
