import React from 'react'
import classes from './Cartlist.module.css'

export default function CartItem(props) {
  return (
    <div className='row'>
        <div className='col'>
            <img className={classes.img} alt={props.title} src={props.src} />
        </div>
        <div className='col'>
            {props.title}
        </div>
    </div>
  )
}
