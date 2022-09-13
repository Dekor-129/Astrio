import {createStore} from 'redux'
import products from './products.json' 
import brands from './brands.json' 
import {delFromAllCartList, delFromCartList , chekMatchInArray} from './functions'
import CONSTANTS from './constants'

const defaultStore = {
    products,
    brands,
    currentProducts: products,
    cartList: [],
    allCartList: []
}

const productReducer = (state = defaultStore, action )=>{
    switch(action.type) {
        case CONSTANTS.ADD_TO_CART:
            return {
                ...state, 
                allCartList: [...state.allCartList, action.payload],
                cartList: chekMatchInArray(state.cartList, action.payload, 'id') ? [...state.cartList] : [...state.cartList, action.payload]
            }
        case CONSTANTS.DELETE_FROM_CART:
            return {
                ...state, 
                cartList: delFromCartList(state, action),
                allCartList: delFromAllCartList(state, action)
            }
        case CONSTANTS.FULL_DELETE_FROM_CART:
            return {
                ...state,
                cartList:  state.cartList.filter((elem)=> elem.id !== action.payload.id),
                allCartList: state.allCartList.filter((elem)=> elem.id !== action.payload.id)
            }
        case CONSTANTS.SORT_BRAND_LIST:
            return {...state, currentProducts: state.products.filter((elem)=> elem.brand === action.payload.id)}
        case CONSTANTS.VIEW_ALL_BRANDS_LIST:
            return {...state, currentProducts: state.products}
        default:
            return state
    }
}

export const addCartListAction = (payload) =>({
    type: CONSTANTS.ADD_TO_CART,
    payload
})

export const deleteCartListAction = (payload) =>({
    type: CONSTANTS.DELETE_FROM_CART,
    payload
})

export const fullDeleteCartAction = (payload) =>({
    type: CONSTANTS.FULL_DELETE_FROM_CART,
    payload
})

export const sortBrandAction = (payload) =>({
    type: CONSTANTS.SORT_BRAND_LIST,
    payload
})

export const viewAllBrandAction = () =>({
    type: CONSTANTS.VIEW_ALL_BRANDS_LIST
})


export const store = createStore(productReducer)