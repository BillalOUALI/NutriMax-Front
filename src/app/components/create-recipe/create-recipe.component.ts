import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientService } from '../../shared/ingredient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  standalone: false,
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.scss'
})
export class CreateRecipeComponent {
  ingredients: any[] = [];

  constructor(private ingredientService: IngredientService, private router: Router) {}

  addIngredient() {
    this.router.navigate(['/add-ingredient']);
  }

  nextStep() {
    // Logique pour passer à l'étape suivante
  }

  cancel(){
    this.router.navigate(['/home']);
  }
}
