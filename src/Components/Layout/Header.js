import { Fragment } from "react";
import mealsImg from "../../mealsImg/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        ReactMeals
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt={"A table full of meals"} />
      </div>
    
    </Fragment>
  );
};
export default Header;
