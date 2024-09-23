import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products; // تأكد من تعديل هذا حسب هيكل البيانات
    });
  }
}
