import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import ShoppingList from '../ShoppingList';
import { FreeMealPlan } from '../../utils/interfaces';

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
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
      {data?.mealplan && (
        <>
          <h1>{data?.mealplan.title}</h1>
          <div>{data?.mealplan.description}</div>
        </>
      )}
      {data?.mealplan && <ShoppingList list={data?.mealplan.shoppingList}/>}
    </div>
  );
};

export default MealPlan;
