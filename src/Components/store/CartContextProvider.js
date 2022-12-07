import { useState } from "react";
import CartContext from "./CartContext";
import ErrorModel from "./Error";



const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [error,setError] = useState()
 
  const removeItemFromCartHandler = (id) => {
         if(items[id].amount===1){
            const updatedAmount = amount - items[id].price
            setAmount(updatedAmount)
            items.splice(id, 1)
            return
        }else{
            items[id].amount--
        }
        const updatedAmount = amount - items[id].price
            setAmount(updatedAmount)
};

  const addItemToCartHandler = (item) => {
    const itemInd = items.findIndex((ites) => {
      return item.id === ites.id;
    });
    if (itemInd === -1) {
      const updatedCart = [item, ...items];
      setItems(updatedCart);
      const updatedAmount = amount + item.amount * item.price;
      setAmount(updatedAmount);
    }else{
      const itemAmount = item.amount
        if(items[itemInd].amount>=5 || items[itemInd].amount+itemAmount>5){
            setError({
              title:"Invalid Amount",
              message:"please Enter valid Amount of Items (1-5)"
            })
            return
        }
        items[itemInd].amount+=itemAmount
        const updatedAmount = amount + items[itemInd].price
        setAmount(updatedAmount)
    }
  };

  const CartCtx = {
    items: items,
    totalAmount: amount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  const errorHandler = ()=>{
    setError(null)
  }

  return (
    <CartContext.Provider value={CartCtx}>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
 