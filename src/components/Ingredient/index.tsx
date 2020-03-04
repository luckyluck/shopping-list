import React from 'react';

import { ShoppingIngredient } from '../MealPlans';
import Value from '../Value';

interface Props {
  ingredient: ShoppingIngredient;
  person: number;
  system: 'us'|'metric';
}

const Ingredient: React.FunctionComponent<Props> = ({ ingredient, person, system }) => (
  <li>
    {ingredient.ingredient.titles.shoppingList}
    <Value values={ingredient.values} person={person} system={system}/>
  </li>
);

export default Ingredient;
