import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAdmin = !!localStorage.getItem('admin'); // Check if user is an admin
    if (isAdmin) {
      return true;
    } else {
      this.router.navigate(['/home']); // Redirect to home if not an admin
      return false;
    }
  }
}

