import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../core/services/comment.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  comments: any[] = [];
  postId!: number; 
  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!; // تحويل id إلى رقم
    this.loadComments();
  }

  loadComments(): void {
    this.commentService.getComments(this.postId).subscribe(
      (data) => {
        this.comments = data.comments; // تأكد من تعديل هذا حسب هيكل البيانات
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}




