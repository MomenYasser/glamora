import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = []; // مصفوفة لتخزين الفئات

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories(); // تحميل الفئات عند تهيئة المكون
  }

  // دالة لتحميل الفئات من الخدمة
  loadCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data; // تأكد من تعديل هذا حسب هيكل البيانات
      },
      (error) => {
        console.error('Error fetching categories:', error); // معالجة الأخطاء
      }
    );
  }
}

