
const initialState = {
    item:[],
    cartList:[],
    cart:[]
}



export const reducer = (state=initialState, action)=>{
    switch (action.type){
        case 'SET_ITEM':
            const updChose = state.item.filter((el)=>el.like !== action.payload.like)
            if(updChose.length === state.item.length){
                updChose.push(action.payload)
            }
            console.log(updChose)
            return {...state, item: updChose}
        case 'ADD_CART':
            const updItem = state.cartList.filter((el)=>el !== action.payload.price)
            if(updItem.length === state.cartList.length){
                updItem.push(action.payload.price)
            }
            const sum = updItem.reduce((acc,el)=>(acc+=el),0)
            console.log(state.cart)
            return {...state, cartList:updItem, cart:[sum]}
        default : {
            return state
        }
    }
}