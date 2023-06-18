import './Users.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../dataTableData';
import { Button } from '@mui/material';

function Users() {

    const actionColumn = [{field : 'actions', headerName : 'Actions', width : 200, renderCell : () => {
        return (
            <div className="action-container">
                <Button>View</Button>
                <Button color='warning'>Delete</Button>
            </div>
        )
    }}]

  return (
    <Box className='data-table-container'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        autoHeight
      />
    </Box>
  )
}

export default Users