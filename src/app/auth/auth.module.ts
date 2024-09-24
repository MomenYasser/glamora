import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Single import for FormsModule and ReactiveFormsModule
import { LoginComponent } from './login/login.component';
import { FormInputComponent } from '../shared/form-input/form-input.component'; 

@NgModule({
  declarations: [LoginComponent, FormInputComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule, // Add ReactiveFormsModule
    RouterModule.forChild([{ path: '', component: LoginComponent }]) // Configure routing
  ]
})
export class AuthModule { }
