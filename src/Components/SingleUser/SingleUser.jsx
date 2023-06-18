import { Avatar, Paper, Typography } from '@mui/material'
import Chart from '../Chart/Chart'
import React from 'react'
import './SingleUser.css'
import List from '../List/List'

function SingleUser() {
    return (
        <div className='single-user-container'>
            <div className="top">
                <Paper className='single-user-details' elevation={3}>
                    <Typography  sx={{fontWeight:'bold'}} gutterBottom variant='h5' className="title">Information</Typography>
                    <div className="actual-details">
                        <Avatar sx={{ height: 125, width: 125, alignSelf:'center' }} src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                        <div className="details">
                            <div className="detail-item" style={{textAlign:'center'}}>
                                <Typography gutterBottom variant='h4'>Jane Doe</Typography>
                            </div>

                            <div className="detail-item">
                                <span className='item-key'>Email: </span>
                                <span className='item-value'>janedoe@gmail.com</span>
                            </div>

                            <div className="detail-item">
                                <span className='item-key'>Phone: </span>
                                <span className='item-value'>+91 0000-000-000</span>
                            </div>

                            <div className="detail-item">
                                <span className='item-key'>Address: </span>
                                <span className='item-value'>36, Eminent Apartments, New Street, New Delhi</span>
                            </div>

                            <div className="detail-item">
                                <span className='item-key'>Country: </span>
                                <span className='item-value'>India</span>
                            </div>
                        </div>
                    </div>
                </Paper>
                <Chart  title='User Spending (in last 6 months)'/>
            </div>
            <div className="single-user-bottom">
                <List/>
            </div>
        </div>
    )
}

export default SingleUser