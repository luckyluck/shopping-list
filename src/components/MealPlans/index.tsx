import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

interface FreeMealPlan {
  id: string;
  userAuthor: string;
  title: string;
  createdAt: string;
  modifiedAt: string;
  description: string;
  type: string;
  sourceID: string;
  sourceSlug?: string;
  isMembersOnly: boolean;
  isShared?: boolean;
  nutritionAverage: any;
  strictness: any;
  tags: any[];
  schedule: any;
  shoppingList: any;
  slug: string;
  authors: any;
}

interface FreeMealPlansData {
  freeMealplans: FreeMealPlan[];
}

interface FreeMealPlanVars {

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
  const { loading, error, data } = useQuery<FreeMealPlansData, FreeMealPlanVars>(FREE_MEAL_PLANS);

  return (
    <div>
      <h1>Meal Plans</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      <ul>
        {data?.freeMealplans.map(({ id, title }: FreeMealPlan) => (
          <li key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlans;
