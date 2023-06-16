import { Paper } from '@mui/material'
import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './SingleWidget.css'
import { AccountBalanceWalletOutlined, MonetizationOnOutlined, ShoppingCartOutlined } from '@mui/icons-material';

function SingleWidget({ type }) {

    let data = {};
    const amount = 23132;

    switch (type) {
        case 'users':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'View all users',
                icon: (
                    <AccountCircleOutlinedIcon className='widget-icon' fontSize='large' style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }} />
                )
            }
            break;

        case 'orders':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <ShoppingCartOutlined className='widget-icon' fontSize='large' style={{
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                    }} />
                )
            }
            break;

        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <MonetizationOnOutlined className='widget-icon' fontSize='large' style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }} />
                )
            }
            break;

        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'View details',
                icon: (
                    <AccountBalanceWalletOutlined className='widget-icon' fontSize='large' style={{
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                        color: "purple",
                    }} />
                )
            }
    }

    return (
        <>
            <Paper className='single-widget' elevation={3}>
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="widget-counter">{data.isMoney ? '$' : ''}{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="show-percentage positive">
                        <KeyboardArrowUpIcon />
                        20%
                    </div>
                    {data.icon}
                </div>
            </Paper>
        </>
    )
}

export default SingleWidget