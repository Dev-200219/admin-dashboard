import './DataTable.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns, productRows, productColumns, ordersRows, ordersColumns } from '../../dataTableData';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function DataTable({type}) {
    const actionColumn = [{field : 'actions', headerName : 'Actions', width : 200, renderCell : (params) => {
        return (
            <div className="action-container">
                <Link to={`/${type}/${params.row.id}`}><Button>View</Button></Link>
                <Button color='warning'>Delete</Button>
            </div>
        )
    }}]

    const rows = type === 'users' ? userRows : type === 'products' ? productRows : ordersRows;
    const columns = type === 'users' ? userColumns : type === 'products' ? productColumns : ordersColumns;

  return (
    <Box className='data-table-container'>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
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

export default DataTable