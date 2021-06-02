import { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
// import "./agtable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function Agtable() {
  const [toggleState, setToggleState] = useState(1);
  const [gridApi, setGridApi] = useState(null);

  const toggleTab = (index) => {
    setToggleState(index);
    gridApi.sizeColumnsToFit();
  };
  const rowData = [
    {
      InvoiceID: "MO63592Dr2",
      Date: "08.04.2021",
      Description: "Code 5928MDO1",
      Status: "Completed",
      Amount: "$2500.00",
    },
    {
      InvoiceID: "MO63592Dr2",
      Date: "08.04.2021",
      Description: "Code 5928MDO1",
      Status: "Completed",
      Amount: "$2500.00",
    },
    {
      InvoiceID: "MO63592Dr2",
      Date: "08.04.2021",
      Description: "Code 5928MDO1",
      Status: "Completed",
      Amount: "$2500.00",
    },
    {
      InvoiceID: "MO63592Dr2",
      Date: "08.04.2021",
      Description: "Code 5928MDO1",
      Status: "Completed",
      Amount: "$2500.00",
    },
    {
      InvoiceID: "MO63592Dr2",
      Date: "08.04.2021",
      Description: "Code 5928MDO1",
      Status: "Completed",
      Amount: "$2500.00",
    },
  ];
  const defaultColDef = {
    sortable: true,
    filter: "agTextColumnFilter",
    unSortIcon: true,
    resizable: true,
  };
  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
  };
  const onGridReady = (params) => {
    setGridApi(params.api);
  };
  const Export = () => {
    gridApi.exportDataAsExcel();
  };

  return (
    <div className="mt-5 m-auto">
      <div className="rci">
        <div className="d-flex justify-content-between ">
          <h3 className="ml-lg-3 mt-lg-4">Recent Transactions</h3>
          <button
            type="button"
            className="btn btn-primary btn-sm mr-lg-3 mt-lg-4"
          >
            <FontAwesomeIcon
              className="mx-1  "
              icon={faUpload}
              style={{ color: "white" }}
            />
            Export
          </button>
        </div>
        <div className=" d-flex mt-3 ml-lg-5  ">
          <h6 className="inin mb-lg-3">Incoming</h6>
          <h6 className="ml-3 inin">InVoices</h6>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1 ? "content  active-content" : "content-t"
          }
        >
          <div className="ag-theme-alpine" style={{ height: 300 }}>
            <AgGridReact
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              onFirstDataRendered={onFirstDataRendered}
              rowData={rowData}
            >
             
              <AgGridColumn
                checkboxSelection={true}
                field="InvoiceID"
              ></AgGridColumn>
              <AgGridColumn field="Date"></AgGridColumn>
              <AgGridColumn field="Description"></AgGridColumn>
              <AgGridColumn field="Status"></AgGridColumn>
              <AgGridColumn field="Amount"></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agtable;
