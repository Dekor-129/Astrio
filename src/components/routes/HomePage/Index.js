import React from 'react'
import { useSelector } from 'react-redux'
import BrandList from '../../UI/BrandList'
import Header from '../../UI/Header'
import ProductList from '../../UI/ProductList'

export default function HomePage() {
    const currentProducts = useSelector((state)=> state.currentProducts)
    const brands = useSelector((state)=> state.brands)
    const allCartList = useSelector((state)=> state.allCartList)

    return (
      <>
        <Header cartList={allCartList}/>
        <div className='container-fluid my-3 mx-2'>
          <div className='row'>
            <BrandList brands={brands} />
            <ProductList currentProducts={currentProducts}/>
          </div>
        </div>
      </>
    )
}
