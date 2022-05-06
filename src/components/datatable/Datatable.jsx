import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../datatableSource";

export const Datatable = () => {

    const actionClumns=[
        {field:'action', headerName:'Action', width:200, renderCell:()=>{
            return(
                <div className="cellAction">
                    <div className="viewBtn">View</div>
                    <div className="deleteBtn">Delete</div>
                </div>
            )
        }}
    ]
  return (
    <div className="datatable">
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
