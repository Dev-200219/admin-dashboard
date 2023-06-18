import { Avatar, Paper, Typography } from '@mui/material'
import Chart from '../Chart/Chart'
import React from 'react'
import './SingleItem.css'
import List from '../List/List'
import { singleOrder, singleProduct, singleUser } from '../../singeItemData'

function SingleItem({ type }) {
    const data = type === 'orders' ? singleOrder : type === 'users' ? singleUser : singleProduct;
    const title = type === 'orders' ? 'Volume of similar orders (in last 6 months)' : type === 'users' ? 'User Spending (in last 6 months)' : 'Product Demand (in last 6 months)';
    return (
        <div className='single-user-container'>
            <div className="top">
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
                                        <div className="detail-item">
                                            <span className='item-key'>{`${key}: `}</span>
                                            <span className='item-value'>{data[key]}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Paper>
                <Chart title={title} />
            </div>
            <div className="single-user-bottom">
                <List />
            </div>
        </div>
    )
}

export default SingleItem