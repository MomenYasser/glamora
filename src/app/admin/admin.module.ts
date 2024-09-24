import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AdminDashboardComponent }])
  ],
  exports: [
    AdminDashboardComponent, // تأكد من تصدير هذا المكون إذا كنت ستستخدمه في وحدات أخرى
  ]
})
export class AdminModule { }

