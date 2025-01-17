import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data.posts; // تأكد من تعديل هذا حسب هيكل البيانات
    });
  }
}

