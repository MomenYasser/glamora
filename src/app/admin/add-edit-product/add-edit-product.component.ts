import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  product: any = { title: '', price: 0 };
  isEditMode: boolean = false;

  constructor(private productsService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id') ?? 0;
    if (id) {
      this.isEditMode = true;
      this.productsService.getProductById(id).subscribe(data => {
        this.product = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.productsService.updateProduct(this.product.id, this.product).subscribe();
    } else {
      this.productsService.addProduct(this.product).subscribe();
    }
  }
}
