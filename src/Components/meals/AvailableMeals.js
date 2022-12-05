import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./Dummy.meals";
import Card from "../UI/Card";
import Mealitem from "./Mealitem/Mealitem";

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <Mealitem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
