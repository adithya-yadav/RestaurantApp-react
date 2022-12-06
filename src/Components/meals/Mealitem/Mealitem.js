import { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Mealitem.module.css";
import MealItemForm from "./MealItemForm";

const Mealitem = (props) => {
  const cartCtx = useContext(CartContext);
  function onAddToCardHandler (amount){
    // console.log(amount)
    cartCtx.items.push({
      id: props.id,
      name: props.name,
      amount:amount,
      price: props.price,
    });
    
    // for(var i=0; i<cartCtx.items.length; i++){
    //     if(cartCtx.items[i].id == props.id){
    //         cartCtx.items[i].amount++
    //         return
    //     }else if(i===cartCtx.items.length-1 && cartCtx.items[i]!==props.id){
    //         cartCtx.items.push({
    //             id: props.id,
    //             name: props.name,
    //             amount:amount,
    //             price: props.price,
    //           });
    //     }
    // } 
    // console.log(cartCtx.items);
    // console.log(props.amount)
    
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
