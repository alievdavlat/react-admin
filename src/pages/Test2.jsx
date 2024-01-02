import React from "react";
import "./test.css";
import moment from 'moment';
import avatarUser from  '../assets/img/women.jpg'
import MainTable from "../components/table/MainTable";


const Test2 = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Visits",
        accessor: "visits"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Profile Progress",
        accessor: "progress"
      }
    ],
    []
  );

  return (
    <>
    <MainTable />
    </>
  )
};

export default Test2;
