import React from 'react'
import BodyCard from './BodyCard'
import CardImage from './CardImage'
import classes from './ProductCard.module.css'

export default function ProductCard(props) {
    return (
        <div className={classes.productCard + ' col-2'}>
            <CardImage 
                src={props.element.image} 
                title={props.element.title} />
            <BodyCard element ={props.element}/>
        </div>
    )
}
