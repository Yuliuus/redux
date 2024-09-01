import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/contactsOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import UserTable from "../UserTable/UserTable";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const weHaveError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    const operation = fetchUsers();
    dispatch(operation);
  }, [dispatch]);

  return (
    <>
      <h1>Users Table</h1>
      {loading && <Loader>Loading users, please wait</Loader>}
      {weHaveError && <Error>Error, error!</Error>}
      <UserTable />
    </>
  );
}

export default App;
