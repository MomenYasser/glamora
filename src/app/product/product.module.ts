import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component'; // تحقق من مسار هذا المكون

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent // تأكد من الإعلان عن جميع المكونات المستخدمة هنا
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: 'details/:id', component: ProductDetailsComponent }
    ])
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

