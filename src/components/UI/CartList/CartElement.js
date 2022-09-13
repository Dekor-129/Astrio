import React from 'react'
import CartItem from './CartItem'
import CartPrice from './CartPrice'
import CartQty from './CartQty'
import CartTotal from './CartTotal'

export default function CartElement(props) {
    return (
        <div className='row'>
            <div className='col-3'>
                <CartItem src={props.elem.image} title={props.elem.title}/>
            </div>
            <div className='col-3'>
                <CartPrice  price={props.elem['regular_price'].value}/>
            </div>
            <div className='col-3'>
                <CartQty elem={props.elem} />
            </div>
            <div className='col-3'>
                <CartTotal  elem={props.elem} price={props.elem['regular_price'].value}/>
            </div>
        </div>
    )
}
