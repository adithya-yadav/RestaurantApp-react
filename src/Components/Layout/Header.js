import { Fragment } from "react";
import mealsImg from "../../mealsImg/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";
import classSum from "./MealsSummary.module.css"

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
      <div className={classSum.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dunner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs.
        </p>
      </div>
    </Fragment>
  );
};
export default Header;
