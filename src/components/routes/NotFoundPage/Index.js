import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Page not found</h1>
      <h1 className='text-center'>Error 404</h1>
      <div  className='text-center'><Link to="/"> Go to Home...</Link></div>
    </div>
  )
}
