import { Avatar, Chip } from "@mui/material";

export const userColumns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    sortable : false,
    renderCell: (params) => {
      return (
        <div className="table-user-cell">
          <Avatar src={params.row.img} alt={params.row.username} />
          {params.row.username}
        </div>
      )
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250,
    sortable: false
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    sortable: false,
    selectable : false,
    renderCell: (params) => {
      return (
        <Chip label={params.row.status} color={params.row.status === 'active' ? 'success' : params.row.status === 'pending' ? 'secondary' : 'warning'} />
      )
    }
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];

export const productColumns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'user',
    headerName: 'User',
    width: 300,
    sortable : false,
    renderCell: (params) => {
      return (
        <div className="table-user-cell">
          <Avatar src={params.row.img} alt={params.row.product} />
          {params.row.product}
        </div>
      )
    }
  },
  {
    field: 'amount',
    headerName: 'Amount($)',
    width: 150,
    sortable: true
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 160,
  },
  {
    field : 'supplier',
    headerName : 'Supplier',
    width : 200
  },
  {
    field: 'demand',
    headerName: 'Demand',
    width: 200,
    sortable: false,
    selectable : false,
    renderCell: (params) => {
      return (
        <Chip label={params.row.demand} color={params.row.demand === 'high' ? 'warning' : params.row.demand === 'low' ? 'success' : 'secondary'} />
      )
    }
  }
];

export const productRows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 785,
    stock : 300,
    supplier : 'Fast Computers Ltd.',
    demand : 'high'
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    amount: 900,
    stock : 150,
    supplier: 'Sony Company Limited',
    demand : 'intermediate'
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 35,
    stock : 100,
    supplier: 'ABC Distributors',
    demand : 'low'
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 920,
    stock : 57,
    supplier: 'DEF Distributors',
    demand : 'intermediate'
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    amount: 2000,
    stock : 135,
    supplier: 'ASUS Ltd.',
    demand : 'high'
  },
];

export const ordersColumns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'user',
    headerName: 'User',
    width: 300,
    sortable : false,
    renderCell: (params) => {
      return (
        <div className="table-user-cell">
          <Avatar src={params.row.img} alt={params.row.product} />
          {params.row.product}
        </div>
      )
    }
  },
  {
    field : 'customer',
    headerName : 'Customer',
    width: 200
  },
  {
    field: 'amount',
    headerName: 'Amount($)',
    width: 150,
    sortable: true
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 160,
  },
  {
    field : 'method',
    headerName : 'Method',
    width : 200
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    sortable: false,
    selectable : false,
    renderCell: (params) => {
      return (
        <Chip label={params.row.status} color={params.row.status === 'Approved' ? 'success' : 'warning'} />
      )
    }
  }
];

export const ordersRows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Michael Doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2342353,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Jane Smith",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online",
    status: "Pending",
  },
];