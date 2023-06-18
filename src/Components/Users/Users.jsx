import './Users.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../dataTableData';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Users() {
    const actionColumn = [{field : 'actions', headerName : 'Actions', width : 200, renderCell : (params) => {
        return (
            <div className="action-container">
                <Link to={`/user/${params.row.id}`}><Button>View</Button></Link>
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