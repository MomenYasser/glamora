import { NgModule } from '@angular/core'; // استيراد NgModule لتعريف الوحدة الأساسية في Angular
import { BrowserModule } from '@angular/platform-browser'; // استيراد BrowserModule وهو مطلوب لتطبيقات الويب Angular
import { HttpClientModule } from '@angular/common/http';  // استيراد HttpClientModule لتمكين الاتصال عبر HTTP داخل التطبيق
import { ReactiveFormsModule } from '@angular/forms'; // استيراد ReactiveFormsModule لدعم النماذج التفاعلية
import { AppComponent } from './app.component'; // استيراد المكون الجذري للتطبيق
import { AppRoutesModule } from './app-routing.module'; // استيراد وحدة التوجيه المخصصة التي تعرف مسارات التطبيق

// استيراد المكونات الجديدة
import { HomeModule } from './home/home.module'; // استيراد وحدة الصفحة الرئيسية
import { ProductListComponent } from './product/product-list/product-list.component'; // استيراد مكون قائمة المنتجات
import { ProductDetailsComponent } from './product/product-details/product-details.component'; // استيراد مكون تفاصيل المنتج
import { CategoryDetailsComponent } from './category/category-details/category-details.component'; // استيراد مكون تفاصيل الفئة
import { PostDetailsComponent } from './blog/post-details/post-details.component'; // استيراد مكون تفاصيل المنشور

// استيراد الخدمات
import { ProductService } from './core/services/product.service'; // استيراد خدمة المنتجات
import { CategoryService } from './core/services/category.service'; // استيراد خدمة الفئات
import { BlogService } from './core/services/blog.service'; // استيراد خدمة المدونة

@NgModule({
  declarations: [
    AppComponent, // إعلان المكون الجذري للتطبيق
    ProductListComponent, // إعلان مكون قائمة المنتجات
    ProductDetailsComponent, // إعلان مكون تفاصيل المنتج
    CategoryDetailsComponent, // إعلان مكون تفاصيل الفئة
    PostDetailsComponent // إعلان مكون تفاصيل المنشور
  ],
  imports: [
    BrowserModule, // استيراد BrowserModule لتشغيل التطبيق في المتصفح
    AppRoutesModule, // استيراد وحدة التوجيه لإعداد التوجيه كما هو محدد في تكوين المسارات
    HttpClientModule, // استيراد HttpClientModule لتمكين الخدمات HTTP في التطبيق
    ReactiveFormsModule, // استيراد ReactiveFormsModule لدعم النماذج التفاعلية
    HomeModule // استيراد وحدة الصفحة الرئيسية
  ],
  providers: [
    ProductService, // تقديم خدمة المنتجات
    CategoryService, // تقديم خدمة الفئات
    BlogService // تقديم خدمة المدونة
  ],
  bootstrap: [AppComponent] // تحديد AppComponent كمكون الدخول الرئيسي للتطبيق
})
export class AppModule { } // تعريف الوحدة الرئيسية التي تطلق التطبيق


