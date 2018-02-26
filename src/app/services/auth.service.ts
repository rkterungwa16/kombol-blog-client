import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  private apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Logs in a registered user
   *
   * @param {object} userInfo contains all the users information
   *
   * @return {observable} Observable containing the user's info
   */
  login(userInfo) {
      return this.http.post(`${this.apiBaseUrl}/v1/login`, userInfo)
      .map((response: {data}) => response)
  }
}
