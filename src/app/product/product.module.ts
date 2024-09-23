import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component'; // تحقق من المسار
import { ProductDetailsComponent } from './product-details/product-details.component'; // تحقق من المسار
import { ProductCardComponent } from '../shared/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent }, // مسار قائمة المنتجات
      { path: 'details/:id', component: ProductDetailsComponent } // مسار تفاصيل المنتج
    ])
  ]
})
export class ProductsModule { }


