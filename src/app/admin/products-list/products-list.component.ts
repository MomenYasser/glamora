import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data.products;
    });
  }

  deleteProduct(id: number): void {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  editProduct(id: number): void {

  }
}
