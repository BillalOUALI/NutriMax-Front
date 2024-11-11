export interface Ingredient {
    name: string;
    quantity: number;
    nutrition: {
      calories: number;
      proteins: number;
      carbohydrates: number;
      fats: number;
    };
  }