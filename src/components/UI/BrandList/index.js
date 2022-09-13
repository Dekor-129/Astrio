import React from 'react'
import { useDispatch } from 'react-redux'
import { sortBrandAction, viewAllBrandAction } from '../../../store'
import classes from './Brand.module.css'

export default function BrandList(props) {
  const dispatch = useDispatch()

  const sortProduct = (elem) => {
    dispatch(sortBrandAction(elem))
  }

  const viewAllProduct = () => {
    dispatch(viewAllBrandAction())
  }

  return (
    <div className={'col-md-2 ' + classes.brandsList}>
      <div className={classes.navBlock} onClick={viewAllProduct}>All Brands</div>
      {props.brands.map((elem)=>(
        <div className={classes.navBlock} key={elem.id} onClick={()=> sortProduct(elem)}>{elem.title}</div>
      ))}
    </div>
  )
}
