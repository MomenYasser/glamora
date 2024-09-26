import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  isAdmin: boolean = true;
  categories: Array<{ name: string; url: string }> = [];
  currentPage: number = 1;
  totalPages: number = 5;
  paginatedProducts: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.categories = [
      { name: 'Electronics', url: '/products/electronics' },
      { name: 'Fashion', url: '/products/fashion' },
      { name: 'Home & Garden', url: '/products/home-garden' }
    ];
  }

  loadProducts() {
    
  }

  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loadProducts();
  }

  deleteProduct(productId: number) {
    console.log(`Deleting product with ID: ${productId}`);
    this.paginatedProducts = this.paginatedProducts.filter(product => product.id !== productId);
  }

  editProduct(productId: number) {
    
    this.router.navigate(['/products/edit', productId]);
  }

  viewOrders() {
    
    this.router.navigate(['/admin/orders']); 
  }

  manageCategories() {
    
    this.router.navigate(['/admin/manage-categories']); 
  }

  addProduct() {
    
    this.router.navigate(['/products/add']); 
  }
}
