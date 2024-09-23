import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // إضافة FormsModule
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule, // إضافة FormsModule هنا
    RouterModule.forChild([{ path: '', component: LoginComponent }])
  ]
})
export class AuthModule { }


