import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: { ingredients: Ingredient[] }[] = [];

  constructor() { }

  // Ajouter une nouvelle recette
  addRecipe(recipe: { ingredients: Ingredient[] }) {
    this.recipes.push(recipe);
  }

  // Obtenir toutes les recettes
  getAllRecipes(): { ingredients: Ingredient[] }[] {
    return this.recipes;
  }

  // Obtenir un résumé d'une recette
  getRecipeSummary(): { ingredients: { name: string; quantity: number }[]; calories: number; proteins: number; carbohydrates: number; fats: number } {
    // Implémentez votre logique pour calculer le résumé nutritionnel ici
    const summary = {
      ingredients: [] as { name: string; quantity: number }[],
      calories: 0,
      proteins: 0,
      carbohydrates: 0,
      fats: 0
    };
    
    // Exemple de logique pour construire le résumé
    this.recipes.forEach(recipe => {
      recipe.ingredients.forEach((ingredient: Ingredient) => { // Spécifiez le type ici
        summary.ingredients.push({
          name: ingredient.name,
          quantity: ingredient.quantity // Ajoutez ici la logique pour la quantité pour 100g
        });
        summary.calories += ingredient.nutrition.calories;
        summary.proteins += ingredient.nutrition.proteins;
        summary.carbohydrates += ingredient.nutrition.carbohydrates;
        summary.fats += ingredient.nutrition.fats;
      });
    });

    return summary;
  }
}
