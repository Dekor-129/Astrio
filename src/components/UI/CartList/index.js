import React from 'react'
import { useSelector } from 'react-redux'
import CartElement from './CartElement'

export default function CartList() {
    const cartList = useSelector((state)=> state.cartList)
    const allCartList = useSelector((state)=> state.allCartList)
    //const subtotal = useSelector((state)=> state.subtotal)
    const subtotal = allCartList.reduce((sum, current)=> {
        return (Math.floor(sum * 100) +  Math.floor(current['regular_price'].value * 100))/100
      }, 0)

    return (
    <>
        <div className='row my-5'>
            <h4 className='col-3 text-center'>Item</h4>
            <h4 className='col-3 text-center'>Price</h4>
            <h4 className='col-3 text-center'>Qty</h4>
            <h4 className='col-3 text-center'>Total</h4>
        </div>
        {cartList.map((elem)=>(
                <CartElement key={elem.id} elem={elem}/>
            ))
        }
        <div className='row justify-content-end'>
            <div className='col-2'>
            Subtotal: ${subtotal}
            </div>
        </div>
        <div className='row justify-content-end'>
            <div className='col-2'>
            <button className="btn btn-success">Checkout</button>
            </div>
        </div>
    </>
   
    )
}
