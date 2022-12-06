import { useState } from 'react'
import CartContext from './CartContext'


const removeItemFromCartHandler = (id)=>{}


const CartContextProvider = (props)=>{
    const [items,setItems]=useState([{id: 'm1', name: 'Sushi', amount:1, price: 22.99}])
    // const [numberOfCart,setNumOfCart] = useState(items.length)

    const addItemToCartHandler = (item)=>{
        const updatedCart = [item,...items]
        setItems(updatedCart)
        // setNumOfCart(5)
        console.log(item)
    }

    const CartCtx = {
        items:items,
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        // numOfCart:numberOfCart
    }
    // useEffect(()=>{

    // })
    
   

    return (
        <CartContext.Provider value={CartCtx}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;