import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ShoppingList from '../ShoppingList';
import { FreeMealPlan } from '../MealPlans';

interface MealPlanData {
  mealplan: FreeMealPlan;
}

interface MealPlanVars {
  id?: string;
}

const MEAL_PLAN = gql`
  query getMealplan($id: ID!) {
    mealplan(id: $id) {
      id
      title
      description
      shoppingList {
        id
        beforeName
        afterName
        shoppingSection
        ingredient {
          titles {
            shoppingList
          }
          shoppingSection
        }
        alternateIngredients {
          beforeName
          afterName
          ingredient {
            titles {
              shoppingList
            }
          }
        }
        additionalIngredients {
          beforeName
          afterName
          ingredient {
            titles {
              shoppingList
            }
          }
        }
        ingredient {
          titles {
            shoppingList
          }
        }
        values {
          us {
            servingSize
            unit
            value
          }
          metric {
            servingSize
            unit
            value
          }
        }
      }
    }
  }
`;

const MealPlan = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<MealPlanData, MealPlanVars>(MEAL_PLAN, { variables: { id } });

  return (
    <div>
      <h1>Meal plan</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data?.mealplan && (
        <ul>
          <li>{data?.mealplan.title}</li>
          <li>{data?.mealplan.description}</li>
        </ul>
      )}
      {data?.mealplan && <ShoppingList list={data?.mealplan.shoppingList}/>}
    </div>
  );
};

export default MealPlan;
