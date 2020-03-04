import React, { useEffect, useState } from 'react';
import { IngredientValues, IngredientValue } from '../MealPlans';

interface Props {
  values?: IngredientValues;
  person: number;
  value: 'us'|'metric';
}

const Value: React.FunctionComponent<Props> = ({ values, person, value }) => {
  const [item, setItem] = useState<IngredientValue>();

  useEffect(() => {
    if (value === 'us') {
      setItem(values?.us.filter((item: IngredientValue): boolean => item.servingSize === person)[0]);
    } else {
      setItem(values?.metric.filter((item: IngredientValue): boolean => item.servingSize === person)[0]);
    }
  }, [values, person, value]);

  if (!item) return null;

  return (
    <span> ,{item?.value} {item?.unit}</span>
  );
};

export default Value;
