import React from 'react'
import Widgets from '../Widget/Widgets'
import Featured from '../Featured/Featured'
import Chart from '../Chart/Chart'
import './Home.css'

function Home() {
  return (
    <>
      <Widgets/>
      <div className="charts-container">
        <Featured/>
        <Chart/>
      </div>
    </>
  )
}

export default Home