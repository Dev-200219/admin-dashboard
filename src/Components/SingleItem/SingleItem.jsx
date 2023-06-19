import { Avatar, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Chart from '../Chart/Chart'
import React from 'react'
import './SingleItem.css'
import List from '../List/List'
import { singleOrder, singleProduct, singleUser } from '../../singeItemData'

function SingleItem({ type }) {
    const data = type === 'orders' ? singleOrder : type === 'users' ? singleUser : singleProduct;
    const title = type === 'orders' ? 'Volume of similar orders (in last 6 months)' : type === 'users' ? 'User Spending (in last 6 months)' : 'Product Demand (in last 6 months)';
    return (
        <Grid container spacing={2}>
            <Grid item lg={4} sm={12} md={5} style={{ width: '100%' }}>
                <Paper className='single-user-details' elevation={3}>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant='h5' className="title">Information</Typography>
                    <div className="actual-details">
                        {
                            data.img &&
                            <Avatar sx={{ height: 125, width: 125, alignSelf: 'center' }} src={data.img} />
                        }
                        <div className="detail-item" style={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant='h4'>{data['Order ID'] ? `#${data["Order ID"]}` : data.Name}</Typography>
                        </div>

                        <div className="details">
                            {
                                Object.keys(data).map((key) => {
                                    return (
                                        key !== 'img' && key !== 'Name' && key !== 'Order ID' &&
                                        <div key={key} className="detail-item">
                                            <span className='item-key'>{`${key}: `}</span>
                                            <span className='item-value'>{data[key]}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Paper>
            </Grid>
            <Grid className='single-item-grid-chart' item lg={8} sm={12} md={7} style={{ width: '100%' }}>
                <Chart title={title} />
            </Grid>
            <Grid className='single-item-grid-list' item xs={12} style={{ width: '100%' }}>
                <List />
            </Grid>
        </Grid>
    )
}

export default SingleItem