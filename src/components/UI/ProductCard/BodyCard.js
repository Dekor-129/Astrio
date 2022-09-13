import React from 'react'
import classes from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addCartListAction } from '../../../store'

export default function BodyCard(props) {
  const dispatch = useDispatch()
  const addToCart = (elem) =>{
        dispatch(addCartListAction(elem))
    }
  return (
    <div className={classes.bodyCard}>
        <p>{props.element.title}</p>
        <div className='row'>
          <div className='col-9'>
            <p>$ {props.element["regular_price"].value} {props.element["regular_price"].currency}</p>
          </div>
          <div className='col-3'>
            <div onClick={()=> addToCart(props.element)} style={{fontSize: '32px', cursor: 'pointer'}}>+</div>
          </div>
        </div>
    </div>
  )
}
