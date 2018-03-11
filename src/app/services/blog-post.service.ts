import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { localStorage } from '../global';

@Injectable()
export class BlogPostService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  private headers: HttpHeaders;
  private token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('kombol-blog-token');
    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
  }

  /**
   * Get blog posts of a current user
   *
   * @return {observable} Observable containing all of the blog posts of current user
   */
  getBlogPost(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/blog/posts`, {headers: this.headers})
    .map((response: Response) => response);
  }

  /**
   * Get all blog posts
   *
   * @return {observable} Observable containing all of the blog posts created
   */
  getAllBlogPosts(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/all-posts`, {headers: this.headers})
    .map((response: Response) => response);
  }

  /**
   * Get one blog post
   *
   * @return {observable} Observable containing all of the blog posts created
   */
  getOnePost(postId): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/post/${postId}`, {headers: this.headers})
    .map((response: Response) => response);
  }

  /**
   * Publish a post
   *
   * @param {object} blogPost object containing post to be created
   *
   * @return {observable} Observable indicating post is created
   */
  publishBlogPost(blogPost): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/blog/post`, blogPost, {headers: this.headers})
    .map((response: Response) => response);
  }

  /**
   * Current user likes a post
   *
   * @param {number} postId the number representing the post to be liked
   *
   * @return {observable} Observable indicating post is liked
   */
  likePost(postId): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/post/like/${postId}`, {}, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Get all likes for a post
   *
   * @param {number} postId the number representing the post to get likes from
   *
   * @return {observable} Observable containing all of a post's likes
   */
  getPostLikes(postId): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/post/likes/${postId}`, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Edit a post created by current user
   *
   * @param {number} postId the number representing the post to be edited
   * @param {object} editedPost an object representing edited information
   *
   * @return {observable} Observable indicating post is edited
   */
  editPost(postId, editedPost): Observable<any> {
    return this.http
    .patch(`${this.apiBaseUrl}/v1/blog/post/${postId}`, editedPost, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Deletes a post created by current user
   *
   * @param {number} postId the number representing the post to be deleted
   *
   * @return {observable} Observable indicating post is deleted
   */
  deletePost(postId): Observable<any> {
    return this.http
    .delete(`${this.apiBaseUrl}/v1/blog/post/${postId}`, { headers: this.headers });
  }

  /**
   * Comment on a post by current user
   *
   * @param {number} postId the number representing the post to be commented on
   * @param {object} postComment an object representing comment
   *
   * @return {observable} Observable indicating comment is successful
   */
  commentOnPost(postId, postComment): Observable<any> {
    return this.http
    .post(`${this.apiBaseUrl}/v1/post/comment/${postId}`, postComment, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Get all comments on a post
   *
   * @param {number} postId the number representing the post to get values from
   *
   * @return {observable} Observable get all comments on a post
   */
  getAllPostComments(postId): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/post/comments/${postId}`, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Delete a comment in a post
   *
   * @param {number} commentId the number representing the comment id
   *
   * @return {observable} Observable response
   */
  deletePostComment(commentId): Observable<any> {
    return this.http
    .delete(`${this.apiBaseUrl}/v1/post/comments/${commentId}`, { headers: this.headers })
    .map((response: Response) => response);
  }

  /**
   * Edits a comment in a post
   *
   * @param {number} commentId the number representing the comment id
   * @param {object} editedComment updated comment of the post
   *
   * @return {observable} Observable response
   */
  editPostComment(commentId, editedComment): Observable<any> {
    return this.http
    .patch(`${this.apiBaseUrl}/v1/post/comments/${commentId}`, editedComment, { headers: this.headers })
    .map((response: Response) => response);
  }
}
