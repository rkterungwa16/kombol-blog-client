import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { localStorage } from '../global';

@Injectable()
export class BlogPostService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  private headers: HttpHeaders
  private token: string

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('kombol-blog-token');
    this.headers = new HttpHeaders()
    .set("Authorization", `Bearer ${this.token}`);
  }

  getBlogPost(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/blog/posts`, {headers: this.headers})
    .map((response: Response) => response)
  }

  publishBlogPost(blogPost): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/blog/post`,blogPost, {headers: this.headers})
    .map((response: Response) => response)
  }

  likePost(postId): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/post/like/${postId}/`, {postId}, { headers: this.headers })
    .map((response: Response) => response)
  }

  getPostLikes(postId): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/post/likes/${postId}`, { headers: this.headers })
    .map((response: Response) => response)
  }
}
