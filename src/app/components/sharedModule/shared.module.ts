// Shared module that contains all the components that are shared across the application. This module will be imported in the app.config.ts file.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import { AddIngredientComponent } from '../add-ingredient/add-ingredient.component';


/**
 * SharedModule is an Angular module that declares and exports common components
 * used across the application. This module imports necessary Angular modules
 * and a custom MaterialModule for UI components.
 *
 * Declarations:
 * - HomeComponent: The home page component.
 * - LoginComponent: The login page component.
 * - CreateRecipeComponent: The component for creating recipes.
 * - AddIngredientComponent: The component for adding ingredients to recipes.
 *
 * Imports:
 * - CommonModule: Angular's common module that includes common directives such as ngIf and ngFor.
 * - FormsModule: Angular's module for template-driven forms.
 * - ReactiveFormsModule: Angular's module for reactive forms.
 * - MaterialModule: Custom module that imports Angular Material components.
 *
 * Exports:
 * - HomeComponent: Makes the home page component available to other modules.
 * - LoginComponent: Makes the login page component available to other modules.
 * - CreateRecipeComponent: Makes the create recipe component available to other modules.
 * - AddIngredientComponent: Makes the add ingredient component available to other modules.
 */
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    CreateRecipeComponent,
    AddIngredientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    CreateRecipeComponent,
    AddIngredientComponent
  ]
})
export class SharedModule { }