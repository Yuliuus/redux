export type User = {
  id?: string;
  name: String;
  username: String;
  email: String;
  phone: String;
};

export type UserItemProps = {
  user: User;
};
