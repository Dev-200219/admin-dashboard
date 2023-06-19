import React from 'react'
import Widgets from '../Widget/Widgets'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'
import './Home.css'
import List from '../List/List'
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <>
      <Widgets/>
      <Grid container spacing={2}>
        <Grid item lg={4} sm={12} md={5} style={{width:'100%'}}>
          <Featured/>
        </Grid>
        <Grid className='chart-grid-item' item lg={8} sm={12} md={7} style={{width:'100%'}}>
          <Chart title="Total Users in last 6 months"/>
        </Grid>
      </Grid>
      <List />
    </>
  )
}

export default Home