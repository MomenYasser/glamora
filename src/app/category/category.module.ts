import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  declarations: [CategoryComponent, CategoryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CategoryComponent },
      { path: ':id', component: CategoryDetailsComponent }
    ])
  ]
})
export class CategoryModule { }

