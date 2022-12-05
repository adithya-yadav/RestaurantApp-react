import classes from "./MealItemForm.module.css";
import classInput from "./Input.module.css";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classInput.input}>
        <label htmlFor="input">Amount</label>
        <input
          id="input"
          type="number"
          value="1"
        />
      </div>

      <button type="submit">+Add</button>
    </form>
  );
};

export default MealItemForm;
