// import { Component } from '@angular/core';
// import { NutritionalService } from '../../shared/nutritional.service';

// @Component({
//   selector: 'app-add-ingredient',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-ingredient.component.html',
//   styleUrl: './add-ingredient.component.scss'
// })
// export class AddIngredientComponent {
//   ingredientName: string = '';
//   quantity: number = 0;
//   nutritionalInfo: any;
//   testValue: string = '';

//   constructor(private nutritionalService: NutritionalService) {}

//   searchIngredient() {
//     // Recherche d'un ingrédient et récupération des informations nutritionnelles
//     this.nutritionalInfo = this.nutritionalService.getNutritionalInfo(this.ingredientName);
//   }

//   addIngredient() {
//     // Logique pour ajouter l'ingrédient avec sa quantité
//   }
// }

import { Component } from '@angular/core';
import { NutritionalService } from '../../shared/nutritional.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-ingredient',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajout de FormsModule ici
  templateUrl: './add-ingredient.component.html',
  styleUrl: './add-ingredient.component.scss'
})
export class AddIngredientComponent {
  ingredientName: string = '';
  quantity: number = 0;
  nutritionalInfo: any;
  testValue: string = '';

  constructor(private nutritionalService: NutritionalService) {}

  searchIngredient() {
    this.nutritionalInfo = this.nutritionalService.getNutritionalInfo(this.ingredientName);
  }

  addIngredient() {
    // Logique pour ajouter l'ingrédient avec sa quantité
  }
}

