import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../shared/recipe.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recipes: any[] = [];

  constructor(private recipeService: RecipeService, private authService: AuthService, private router: Router) {
    if (this.isBrowser()) {
      console.log('Browser environment detected');
      const userId = localStorage.getItem('userId');
      console.log('Retrieved userId from localStorage:', userId);
      if (userId) {
        this.authService.getUserRecipes(userId).subscribe(recipes => {
          console.log('recipes retrieved', recipes);
          this.recipes = recipes;
        });
      } else {
        console.error('userId is null or undefined');
      }
    } else {
      console.error('Not running in a browser environment');
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  createRecipe() {
    this.router.navigate(['/create-recipe']);
  }
}
