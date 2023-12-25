import React from 'react'
import easel from '../assets/images/easel.png'
import {Link} from 'react-router-dom'

function Errorpage() {
  return (
    <div className='error-section'>
      <h1 className='error-msg'>404</h1>
      <img height={300} src={easel} alt="" />
      <p>It looks like the page you are trying to reach does not exist </p>
      <Link to="/" className='btn-primary'>Back to the Homepage</Link>
    </div>
  )
}

export default Errorpage
