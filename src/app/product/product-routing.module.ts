import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from '../home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // صفحة قائمة المنتجات
  { path: ':id', component: ProductDetailsComponent } // صفحة تفاصيل المنتج
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // استخدام forChild لتحميل المسارات الخاصة بهذه الوحدة
  exports: [RouterModule]
})
export class ProductRoutingModule { }

