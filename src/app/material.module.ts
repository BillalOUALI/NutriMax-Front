//Contains all dependencies for Angular Material components. This module will be imported in the app.config.ts file.

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { MatCardContent} from '@angular/material/card';
import { MatCardTitle} from '@angular/material/card'; 
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCard,
    AsyncPipe
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatToolbarModule,
    MatButtonModule,
    AsyncPipe,
  ]
})
export class MaterialModule { }