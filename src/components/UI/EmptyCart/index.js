import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <>
        <h1 className='text-center mt-5'>Your shopping cart is empty :(</h1>
        <div className='text-center'>
            <Link to="/">Let 's fill it up...</Link>
        </div>
    </>
  )
}
