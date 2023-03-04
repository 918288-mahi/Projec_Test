export  const CartAction =(product)=>{
    return{
        type:"ADD_TO_CART",
        payload:{
            product,
            quality:1
        }

    }
}
export const removecart =(productid)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload:{
            productid:productid
        }
    }
}
