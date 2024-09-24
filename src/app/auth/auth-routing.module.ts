import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route to the login page
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect root to login page
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
