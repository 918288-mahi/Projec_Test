const initaialstate={
    cart:[]
}
const Cartreducer =(state = initaialstate,action)=>{
   let cart =state.cart;
    switch(action,type){
        case 'ADD_TO_CART':
            cart.push(action,payload)
            return{
                ...state,
                cart:cart
            }
            case 'REMOVE_FROM_CART':
                return{
                    ...state,
                    cart:cart.filter(item =>item.product.id != action.payload.productid)
                }
            default:
                return state;
    }
}
export default Cartreducer;