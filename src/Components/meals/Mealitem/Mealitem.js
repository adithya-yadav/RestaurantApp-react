import { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm";

const Mealitem = (props) => {
  const cartCtx = useContext(CartContext);

  function onAddToCardHandler(amount) {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$ ${props.price.toFixed(2)}`}</div>
      </div>
      <MealItemForm onAddToCard={onAddToCardHandler} />
    </li>
  );
};

export default Mealitem;
