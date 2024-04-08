import { Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  PRIORITY_MAPPER,
  STATUS_MAPPER,
  TICKET_CATEGORY_MAPPER,
} from "../../constants";

const TicketList = () => {
  const navigate = useNavigate();

  const tickets = useSelector(({ ticketInfo }) => ticketInfo?.tickets || []);

  const columns = [
    { field: "id",  headerName: "Ticket ID" },
    { field: "title", flex: 1, headerName: "Subject" },
    {
      field: "priority",
      headerName: "Priority",
      renderCell: (params) => {
        const priority = params.value;
        return (
          <div className={`${priority} table-priority`}>
            {PRIORITY_MAPPER[priority]}
          </div>
        );
      },
      width: 100,
    },
    {
      field: "category",
      headerName: "Type",
      renderCell: (params) => {
        const category = params.value;
        return <div>{TICKET_CATEGORY_MAPPER[category]}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const status = params.value;
        return (
          <div className={`${status} status-text `}>
            {STATUS_MAPPER[status]}
          </div>
        );
      },
    },
    {  field: "createdAt", headerName: "Requested Date", width: 200 },
    {
      flex: 0.5,
      field: "detailsButton",
      headerName: "",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => handleViewDetails(event, params.row.id)}
          >
            View Details
          </Button>
        );
      },
    },
  ];

  const openTicketDetails = (ticketId = "") => {
    navigate(`/${ticketId}`);
  };

  const handleViewDetails = (event, id) => {
    event.stopPropagation();
    openTicketDetails(id);
  };

  const handleCellClick = (event) => {
    event.stopPropagation();
  };

  const handleCellDoubleClick = (event, params) => {
    event.stopPropagation();
    openTicketDetails(params.row.id);
  };
  return (
    <Stack>
      <DataGrid
        autoHeight
        rows={tickets}
        columns={columns}
        columnBuffer={0}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnSelector
        onCellClick={(params, event) => handleCellClick(event, params)}
        onCellDoubleClick={(params, event) =>
          handleCellDoubleClick(event, params)
        }
        disableSelectionOnClick
      />
    </Stack>
  );
};

export default TicketList;
