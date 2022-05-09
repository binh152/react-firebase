import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { Link } from "react-router-dom";

export const Datatable = () => {
  const actionClumns = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewBtn">View</div>
            </Link>
            <div className="deleteBtn">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="title">
        Add new user
        <Link to="/users/new" className="link">
          Add new
        </Link>
      </div>

      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionClumns)}
        // pageSize={15}
        // rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
};
