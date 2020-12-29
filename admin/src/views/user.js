import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import AdminService from "../services/admin.service";
function User() {
  const columns = [
    {
      name: "UserName",
      selector: "Username",
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
    }
  }, []);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <DataTable
            title="Users"
            columns={columns}
            data={users}
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
