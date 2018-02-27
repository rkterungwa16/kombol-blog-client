import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { localStorage } from '../global';

@Injectable()
export class UserService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  private headers: HttpHeaders;
  private token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('kombol-blog-token');
    this.headers = new HttpHeaders()
    .set("Authorization", `Bearer ${this.token}`);
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
  }

  /**
   * Get current user details
   *
   * @return {observable} Observable containing current user's info
  */
  getUser(): Observable<any> {
    return this.http
    .get(`${this.apiBaseUrl}/v1/user`, {headers: this.headers})
    .map((response: Response) => response)
  }
}
