import { Paper, Typography } from '@mui/material'
import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Chart.css'

function Chart() {

  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <Paper className='chart' elevation={3}>
      <Typography gutterBottom variant='h5' className="title">Total Users in last 6 months</Typography>
      <ResponsiveContainer height='100%' width='100%'>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" style={{color:'lightgray'}}/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#Total)" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  )
}

export default Chart