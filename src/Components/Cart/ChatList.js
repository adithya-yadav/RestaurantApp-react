import { useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./ChatList.module.css";

const CartList = (props) => {
    const cartCtx = useContext(CartContext)
    const addHandler = () => {
        const itemInd =cartCtx.items.findIndex(item=>{
            return item.id === props.id
        })
        cartCtx.items[itemInd].amount++
      };
      const removeHandler = () => {
        const itemInd =cartCtx.items.findIndex(item=>{
            return item.id === props.id
        })
        console.log(itemInd)
        if(props.amount===1){
            cartCtx.items.splice(itemInd, 1)
            return
        }else{
            cartCtx.items[itemInd].amount--
            // for(let i=0; i<cartCtx.items.length; i++){
            //     if(cartCtx.items[i].id == props.id){
            //         cartCtx.items[i].amount--
            //         return
            //     }
            // }    
        } 
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
