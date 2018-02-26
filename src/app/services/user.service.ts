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
}
