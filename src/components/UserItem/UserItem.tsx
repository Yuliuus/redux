import { phoneFilter } from "../../helpers/phoneFilter";
import { UserItemProps } from "../UserItem/UserItem.types";
import css from "../UserItem/UserItem.module.css";

export default function UserItem({ user }: UserItemProps) {
  const normalizedPhone = phoneFilter(user.phone);

  return (
    <>
      <td className={css.td}>{user.name}</td>
      <td className={css.td}>{user.username}</td>
      <td className={css.td}>{user.email}</td>
      <td className={css.td}>{normalizedPhone}</td>
    </>
  );
}
