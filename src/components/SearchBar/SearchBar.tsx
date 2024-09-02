import { Formik } from "formik";
import SearchBox from "../SearchBox/SearchBox";

export default function SearchBar() {
  return (
    <tr>
      <Formik
        initialValues={{ name: "", username: "", email: "", phone: "" }}
        onSubmit={() => {}}
      >
        {() => (
          <>
            <SearchBox name="name" placeholder="Search by Name" />
            <SearchBox name="username" placeholder="Search by Username" />
            <SearchBox name="email" placeholder="Search by Email" />
            <SearchBox name="phone" placeholder="Search by Phone" />
          </>
        )}
      </Formik>
    </tr>
  );
}
