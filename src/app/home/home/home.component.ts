import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { AuthService } from '../../core/services/auth.service'; // إضافة خدمة Auth
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  isAdmin: boolean = false;

  constructor(private productService: ProductService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products; // تعديل حسب هيكل البيانات
    });
    this.isAdmin = this.authService.isAdmin(); // استخدام خدمة Auth للتحقق من الدور
  }
}


