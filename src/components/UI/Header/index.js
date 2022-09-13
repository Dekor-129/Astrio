import React from 'react'
import Cart from './Cart'
import Logo from './Logo'
import classes from './Header.module.css'

export default function Header(props) {
  return (
    <header className={'container-fluid pt-5 pb-1 ' + classes.header}  >
        <div className="row justify-content-between">
            <div className="col-4 px-3 ">
                <Logo />
            </div>
            <div className="col-2 text-center">
                <Cart cartList={props.cartList} />
            </div>
        </div>
    </header>
  )
}
