import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { FreeMealPlan } from '../../utils/interfaces';

interface FreeMealPlansData {
  freeMealplans: FreeMealPlan[];
}

const FREE_MEAL_PLANS = gql`
  {
    freeMealplans {
      id
      title
      description
      type
      slug
    }
  }
`;

const MealPlans = () => {
  const { loading, error, data } = useQuery<FreeMealPlansData>(FREE_MEAL_PLANS);

  return (
    <div>
      <h1>Meal Plans</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      <ul>
        {data?.freeMealplans.map(({ id, title }: FreeMealPlan) => (
          <li key={id}>
            <NavLink to={`/meal-plans/${id}`}>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlans;
