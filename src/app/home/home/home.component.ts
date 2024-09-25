import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service'; // تأكد من المسار الصحيح
import { AuthService } from '../../core/services/auth.service';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  isAdmin: boolean = false;
  itemsPerPage: number = 10; // عدد العناصر في كل صفحة
  currentPage: number = 1; // الصفحة الحالية

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
    private categoryService: CategoryService // استخدام CategoryService
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products; // تأكد من أن البيانات تأتي بالشكل الصحيح
    });

    this.isAdmin = this.authService.isAdmin();

    // جلب الفئات من الخدمة
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data; // تأكد من أن البيانات تأتي بالشكل الصحيح
      console.log('Loaded Categories:', this.categories); // تسجيل الفئات
    });
  }

  get paginatedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.products.slice(start, start + this.itemsPerPage);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  // دالة التمرير السلس لقسم الفئات
  scrollToCategories() {
    const categoriesElement = document.getElementById('categories-section');
    if (categoriesElement) {
      categoriesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}




