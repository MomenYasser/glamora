import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';


@Component({
    selector: 'app-categories',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoriesComponent implements OnInit {
    categories: any[] = [];

    constructor(private categoryService: CategoryService) { }

    ngOnInit() {
        this.categoryService.getCategories().subscribe(data => {
            this.categories = data.categories; // تأكد من تعديل هذا حسب هيكل البيانات
        });
    }
}
