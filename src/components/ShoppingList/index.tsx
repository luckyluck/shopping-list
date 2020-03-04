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
  const [person, setPerson] = useState(1);
  const [system, setSystem] = useState<'us'|'metric'>('metric');

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
      <div>
        <div>
          <label htmlFor="person">
            Person
            <select name="person" id="person" onChange={e => setPerson(+e.target.value)}>
              {[1,2,3,4,5,6,7,8].map((value: number) => (
                <option value={value} key={value}>{value}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="us">
            us
            <input
              type="radio"
              name='value'
              id='us'
              value={'us'}
              checked={system === 'us'}
              onChange={(): void => setSystem('us')}
            />
          </label>
          <label htmlFor="metric">
            metric
            <input
              type="radio"
              name='value'
              id='metric'
              value={'metric'}
              checked={system === 'metric'}
              onChange={(): void => setSystem('metric')}
            />
          </label>
        </div>
      </div>
      {Object.entries(preparedList).map(([key, value]: any) => (
        <Fragment key={key}>
          <h3>{key}</h3>
          <ul>
            {value.map((item: ShoppingIngredient) => (
              <Ingredient key={item.id} ingredient={item} person={person} system={system}/>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default ShoppingList;
