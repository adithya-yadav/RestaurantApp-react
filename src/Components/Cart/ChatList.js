import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./ChatList.module.css";

const CartList = (props) => {
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx
    const addHandler = () => {
        const itemInd =cartCtx.items.findIndex(item=>{
            return item.id === props.id
        })
        cartCtx.addItem({
          id:items[itemInd].id,
          name:items[itemInd].name,
          amount:1,
          price:items[itemInd].price
        })
      };
      const removeHandler = () => {
        const itemId =cartCtx.items.findIndex(item=>{
            return item.id === props.id
        })
        cartCtx.removeItem(itemId)
      };
    
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{`$ ${props.price.toFixed(2)}`}</div>
      </div>
      <span className={classes.amount}>{`X ${props.amount}`}</span>
      <div className={classes.actions}>
        <button onClick={removeHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </li>
  );
};
export default CartList;
