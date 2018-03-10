import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { localStorage } from '../global';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  private headers: HttpHeaders;
  private token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('kombol-blog-token');
    this.headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
  }

  /**
   * Registers a new user
   *
   * @param {object} userInfo contains all the users information
   *
   * @return {observable} Observable containing the user's info
   */
  registerUser(userInfo): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/register`, userInfo)
      .map((response: Response) => response)
      .catch((error) => Observable.throw(error));
  }

  /**
   * Get current user details
   *
   * @return {observable} Observable containing current user's info
  */
  getUser(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/user`, {headers: this.headers})
    .map((response: Response) => response);
  }

  /**
   * Follow a user
   *
   * @return {observable} Observable containing current user's info
  */
  followAUser(userId): Observable<any> {
    return this.http
    .post(`${this.apiBaseUrl}/v1/user/follow/${userId}`, {}, { headers: this.headers });
  }

  /**
   * Check if current user is following a user
   *
   * @return {observable} Observable containing current user's info
  */
  currentUserIsFollowing(userId): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/user/is-following/${userId}`, { headers: this.headers });
  }

  /**
   * Get all current user's followers
   *
   * @return {observable} Observable containing current user's info
  */
  getCurrentUserFollowers(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/user/followers`, { headers: this.headers });
  }
}
