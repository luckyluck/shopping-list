import React, { Fragment, useEffect, useState } from 'react';

import { ShoppingIngredient } from '../MealPlans';
import Ingredient from '../Ingredient';

interface Props {
  list: ShoppingIngredient[]
}

interface PreparedList {
  [key: string]: ShoppingIngredient[];
}

const ShoppingList: React.FunctionComponent<Props> = ({ list = [] }) => {
  const [preparedList, setPreparedList] = useState({});

  useEffect(() => {
    if (list) {
      setPreparedList(list.reduce((result: PreparedList, item: ShoppingIngredient) => {
        if (!result[item.shoppingSection]) {
          result[item.shoppingSection] = [];
        }
        result[item.shoppingSection].push(item);

        return result;
      }, {}));
    }
  }, [list]);

  return (
    <div>
      <h2>Shopping list</h2>
      {Object.entries(preparedList).map(([key, value]: any) => (
        <Fragment key={key}>
          <h3>{key}</h3>
          <ul>
            {value.map((item: ShoppingIngredient) => (
              <Ingredient key={item.id} ingredient={item} person={2} value={'metric'}/>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default ShoppingList;
