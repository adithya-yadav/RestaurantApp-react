import classes from "./HeaderChatButton.module.css";
import CartIcon from "../Cart/Carticon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/CartContext";


const HeaderCartButton = (props) => {
  const [buttonHighlight,setButtonHighlight]=useState(false)
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx

  const btnClasses = `${classes.button} ${buttonHighlight ? classes.bump :""}`
  useEffect(()=>{
    if(items.length === 0 ){
      return
    }
    const timmer = setButtonHighlight(true)
    setTimeout(() => {
      setButtonHighlight(false)
    }, 300);
    return ()=>{
      clearTimeout(timmer)
    }
  },[items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
