import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // يجعل الخدمة متاحة في كل المشروع بدون الحاجة لإضافتها في المودول
})
export class CategoryService {
  private apiUrl = 'https://dummyjson.com/docs/products/categories'; // عنوان API للفئات

  constructor(private http: HttpClient) { }

  // دالة لجلب جميع الفئات
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  // دالة لجلب المنتجات حسب الفئة
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }
}

