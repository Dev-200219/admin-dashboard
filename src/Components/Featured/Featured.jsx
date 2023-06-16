import { CircularProgress, Paper, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Featured.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';

function Featured() {
  return (
    <>
      <Paper className='featured' elevation={3}>
        <div className="top">
          <Typography variant='h5' className="title">Total Revenue</Typography>
          <MoreVertIcon/>
        </div>
        <div className="bottom">
            <div className="featured-chart">
              <CircularProgressbar value={70} text='70%' strokeWidth='5'/>
            </div>
            <p className="chart-title">Total sales made today</p>
            <p className="amount">$550</p>
            <p className="message">Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
              <div className="item">
                <span className="item-title">Target</span>
                <div className="item-result positive">
                  <KeyboardArrowUpOutlined fontSize='small'/>
                  <span>$12.4K</span>
                </div>
              </div>
              <div className="item">
              <span className="item-title">Last Week</span>
                <div className="item-result positive">
                  <KeyboardArrowUpOutlined fontSize='small'/>
                  <span>$32.4K</span>
                </div>
              </div>
              <div className="item">
              <span className="item-title">Last Month</span>
                <div className="item-result negative">
                  <KeyboardArrowDownOutlined fontSize='small'/>
                  <span>$45.6K</span>
                </div>
              </div>
            </div>
        </div>
      </Paper>
    </>
  )
}

export default Featured