import classes from "./HeaderChatButton.module.css";
import CartIcon from "../Cart/Carticon";


const HeaderCartButton = (props) => {

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
