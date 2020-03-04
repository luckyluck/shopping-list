interface Titles {
  admin: string;
  singular: string;
  plural: string;
  shoppingList: string;
}

interface Ingredient {
  id: string;
  titles: Titles;
  createdAt: string;
  modifiedAt: string;
  shoppingSection: string;
}

interface AlternateIngredient {
  id: string;
  beforeName: string;
  afterName: string;
  ingredient: Ingredient;
}

interface AdditionalIngredient {
  id: string;
  beforeName: string;
  afterName: string;
  ingredient: Ingredient;
}

interface DualValue {
  unit: string;
  value: string;
}

export interface IngredientValue {
  dualValue: DualValue;
  optionalValues: IngredientValue[];
  servingSize: number;
  unit: string;
  value: string;
}

export interface IngredientValues {
  us: IngredientValue[];
  metric: IngredientValue[];
}

export interface ShoppingIngredient {
  id: string;
  optional: boolean;
  beforeName: string;
  afterName: string;
  shoppingSection: string;
  alternateIngredients: AlternateIngredient[];
  additionalIngredients: AdditionalIngredient[];
  values?: IngredientValues;
  ingredient: Ingredient;
}

export interface FreeMealPlan {
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
  shoppingList: ShoppingIngredient[];
  slug: string;
  authors: any;
}
