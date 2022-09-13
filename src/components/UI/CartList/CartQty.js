import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCartListAction, deleteCartListAction } from '../../../store'
import classes from './Cartlist.module.css'
export default function CartQty(props) {
    const dispatch = useDispatch()
    const allCartList = useSelector((state)=> state.allCartList)
    const qty = allCartList.filter((el)=>el.id === props.elem.id).length
    const addToCart = (elem) =>{
        dispatch(addCartListAction(elem))
    }

    const deleteFromCart = (elem)=>{
        dispatch(deleteCartListAction(elem))
    }
    return (
        <div className='row justify-content-center'>
            <div className={'col-4 text-center ' + classes.qtyDec} onClick={()=> deleteFromCart(props.elem)}>-</div>
            <div className='col-4 text-center'> 
                {qty}
            </div>
            <div className={'col-4 text-center ' + classes.qtyInc} onClick={()=> addToCart(props.elem)}>+</div>
        </div>
    )
}
