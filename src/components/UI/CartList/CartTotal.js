import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fullDeleteCartAction } from '../../../store'
import classes from './Cartlist.module.css'

export default function CartTotal(props) {
    const dispatch = useDispatch()
    const allCartList = useSelector((state)=> state.allCartList)
    const qty = allCartList.filter((el)=>el.id === props.elem.id).length
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='text-center'>
                    $ {(Math.floor(props.price * 100) * qty)/100}
                    <i onClick={()=> dispatch(fullDeleteCartAction(props.elem))} className={"bi bi-trash " + classes.i } />
                </div>
            </div>
        </div>
    )   
}
