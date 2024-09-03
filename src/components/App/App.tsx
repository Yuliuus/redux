import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/contacts/contactsOps";
import { AppDispatch } from "../../redux/store";
import { selectLoading, selectError } from "../../redux/contacts/contactsSelectors";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import UserTable from "../UserTable/UserTable";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(selectLoading);
  const weHaveError = useSelector(selectError);

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
