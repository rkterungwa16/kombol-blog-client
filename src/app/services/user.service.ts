import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private apiBaseUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) {

  }

  /**
   * Returns the logged in user's information
   *
   * @param String id number of the logged in user
   *
   * @return Observable containing the user's info
   */
  getBlogs(): Observable<any> {
    return this.http
      .get(`${this.apiBaseUrl}/v1/user/1/posts`)
      .map((response: Response) => response)
  }

  /**
   * Returns the logged in user's information
   *
   * @param String id number of the logged in user
   *
   * @return Observable containing the user's info
   */
  registerUser(userInfo): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/v1/register`, userInfo)
      .map((response: Response) => response)
  }
}
