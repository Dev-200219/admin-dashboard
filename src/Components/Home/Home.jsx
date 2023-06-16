import React from 'react'
import Widgets from '../Widget/Widgets'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'
import './Home.css'
import List from '../List/List'

function Home() {
  return (
    <>
      <Widgets/>
      <div className="charts-container">
        <Featured/>
        <Chart/>
      </div>
      <List />
    </>
  )
}

export default Home