const initialState = {
    item:[]
}



export const reducer = (state=initialState, action)=>{
    switch (action.type){
        case 'SET_ITEM':
            const updChose = state.item.filter((el)=>el.id !== action.payload.id)
            if(updChose.length === state.item.length){
                updChose.push(action.payload)
            }
            console.log(state.item)
            return {...state, item: updChose}
        default : {
            return state
        }
    }
}