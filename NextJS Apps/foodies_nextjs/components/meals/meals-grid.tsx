import React from "react";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export interface Meal {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
}

export interface MealWithId extends Meal {
  id: string;
}

export interface MealsGridProp {
  meals: MealWithId[];
}

export default function MealsGrid({ meals }: MealsGridProp) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
