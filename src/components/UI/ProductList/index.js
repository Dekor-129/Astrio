import React from 'react'
import ProductCard from '../../UI/ProductCard'

export default function ProductList(props) {
  return (
    <div className='col-md-10'>
      <div className='row'>
        {props.currentProducts.length !== 0 ?
          props.currentProducts.map(product => (
            <ProductCard 
              key={product.id}
              element={product} />
            ))
          :
          <div className='row align-items-center'>
            <h2 className='text-center'>The product is currently out of stock</h2>
          </div>
          }
      </div>
    </div>
  )
}
