import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) { }

  getComments(postId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/post/${postId}`);
  }

  addComment(comment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, comment);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${commentId}`);
  }

  updateComment(commentId: number, comment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${commentId}`, comment);
  }
}
