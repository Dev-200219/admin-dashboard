import React from 'react'
import SingleWidget from '../SingleWidget/SingleWidget'
import './Widget.css'

function Widgets() {
  return (
    <div className='widgets-container'>
        <SingleWidget type='users'/>
        <SingleWidget type='orders'/>
        <SingleWidget type='earnings'/>
        <SingleWidget type='balance'/>
    </div>
  )
}

export default Widgets