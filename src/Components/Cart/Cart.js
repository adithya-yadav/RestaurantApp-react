import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import Mealitem from "../meals/Mealitem/Mealitem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    let total = 0
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        total+=item.price*item.amount
        return(
          <Mealitem
             key={item.id}
             id={item.id}
             name={item.name}
             description={item.description}
             price={item.price}     
          />)
      },)}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{total.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClick}>close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
