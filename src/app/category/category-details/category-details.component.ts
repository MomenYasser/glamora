import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  products: any[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!; // استخدام ! لتجنب null
    if (id) { // التأكد من أن id ليس null
      // استخدام subscribe مع observer بدلاً من استخدام دوال منفصلة
      this.categoryService.getProductsByCategory(id).subscribe({
        next: (data) => {
          this.products = data.products; // تأكد من تعديل هذا حسب هيكل البيانات
        },
        error: (error) => {
          console.error('Error fetching products:', error); // معالجة الأخطاء في حالة فشل الاستعلام
        },
      });
    } else {
      console.error('Invalid category ID'); // رسالة خطأ في حال كان id غير صالح
    }
  }
}


