import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../UI/Header'
import CartList from '../../UI/CartList'
import EmptyCart from '../../UI/EmptyCart'

export default function CartPage() {
  const allCartList = useSelector((state)=> state.allCartList)

  return (
    <>
      <Header cartList={allCartList}/> 
      <h2 className='text-center my-3'>Shopping Cart</h2>
      { allCartList.length > 0 ? <CartList /> : <EmptyCart />}
    </>
  )
}
