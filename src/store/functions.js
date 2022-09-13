export const delFromAllCartList = (state, action)=>{
    const otherElement = state.allCartList.filter((elem)=> elem.id !== action.payload.id)

    if(state.allCartList.filter((elem)=> elem.id === action.payload.id).length > 1) {
        const element = state.allCartList.filter((elem)=> elem.id === action.payload.id)
        element.pop()
        return [...otherElement, ...element]
    } else {
        return [...otherElement]
    }
}

export const delFromCartList = (state, action)=>{
    if(state.allCartList.filter((elem)=> elem.id === action.payload.id).length > 1) {
        return state.cartList
    } else {
        return state.cartList.filter((elem)=> elem.id !== action.payload.id)
    }
}


export const chekMatchInArray = (arr, elem, prop) =>{
    let isInArray = false
    arr.forEach(el =>{
      if(el[prop] === elem[prop]) isInArray = true
    })
    return isInArray
}