import React from 'react';

import { ShoppingIngredient } from '../MealPlans';
import Value from '../Value';

interface Props {
  ingredient: ShoppingIngredient;
  person: number;
  value: 'us'|'metric';
}

const Ingredient: React.FunctionComponent<Props> = ({ ingredient, person, value }) => (
  <li>
    {ingredient.ingredient.titles.shoppingList}
    <Value values={ingredient.values} person={person} value={value}/>
  </li>
);

export default Ingredient;
