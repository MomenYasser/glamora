import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [BlogListComponent, PostDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BlogListComponent },
      { path: ':id', component: PostDetailsComponent }
    ])
  ]
})
export class BlogModule { }

