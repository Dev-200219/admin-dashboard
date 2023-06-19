import './DataTable.css'
import { Box, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns, productRows, productColumns, ordersRows, ordersColumns } from '../../dataTableData';
import { Link } from 'react-router-dom';

function DataTable({ type }) {
  const actionColumn = [{
    field: 'actions', headerName: 'Actions', width: 200, renderCell: (params) => {
      return (
        <div className="action-container">
          <Link to={`/${type}/${params.row.id}`}><Button>View</Button></Link>
          <Button color='warning'>Delete</Button>
        </div>
      )
    }
  }]

  const rows = type === 'users' ? userRows : type === 'products' ? productRows : ordersRows;
  const columns = type === 'users' ? userColumns : type === 'products' ? productColumns : ordersColumns;
  const temp = type === 'users' ? 'User' : 'Product'

  return (
    <Box className='data-table-container'>
      {
        type !== 'orders' && <Typography sx={{ color: 'lightgray', position: 'relative' }} gutterBottom variant='h5'>
          {`Add New ${temp}`}
          <Link to={`/${type}/new`}>
            <Button variant='contained' color='success' sx={{ position: 'absolute', right: 0, top: 0 }}>Add New</Button>
          </Link>
        </Typography>
      }
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