import classes from "./HeaderChatButton.module.css";
import CartIcon from "../Cart/Carticon";
import { useContext } from "react";
import CartContext from "../store/CartContext";


const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
