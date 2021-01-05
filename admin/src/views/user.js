import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminService from "../services/admin.service";
import Searchbox from "../components/searchbox";
function User() {
  const columns = [
    {
      name: "UserName",
      selector: "Username",
      sortable: true,
    },
    {
      name: "Email",
      selector: "Email",
      sortable: true,
    },
    {
      name: "Score",
      selector: "Score",
      sortable: true,
    },
    {
      name: "Victory",
      selector: "WinBattle",
      sortable: true,
    },
    {
      name: "Defeat",
      selector: "DefeatBattle",
      sortable: true,
    },
    {
      name: "Draw",
      selector: "DrawBattle",
      sortable: true,
    },
  ];
  const [users, SetUsers] = useState([]);
  const [clone, SetClones] = useState([]);
  const [input, SetInput] = useState("");
  const handleClick = (row) => {
    console.log(row);
    window.location.href = `users/${row.ID}`;
  };
  useEffect(async () => {
    const usrs = await AdminService.getAllUser();
    const res = await usrs.json();
    console.log(res);
    if (res) {
      SetUsers(res);
      SetClones(res);
    }
  }, []);
  const updateInput = async (input) => {
    const filtered = users.filter((user) => {
      return (
        user.Username.toLowerCase() +
        "" +
        user.Email.toLowerCase()
      ).includes(input.toLowerCase());
    });
    SetInput(input);
    SetClones(filtered);
  };
  const conditionalRowStyles = [
    {
      when: (row) => row.IsBanned == 1,
      style: {
        backgroundColor: "red",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <DataTable
            conditionalRowStyles={conditionalRowStyles}
            subHeader
            subHeaderComponent={[
              <Searchbox keyword={input} setKeyword={updateInput} />,
            ]}
            title="Users"
            columns={columns}
            data={clone}
            defaultSortField="Score"
            defaultSortAsc={false}
            pagination
            selectableRows
            onRowClicked={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default User;
