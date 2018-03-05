import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { localStorage } from '../global';
import { Response } from '../models/response'

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model = {
      email: '',
      password: ''
    };

    loginForm: FormGroup
    loginBorderColor =  '';
    errorMessage: string;
    loading: string;

    constructor(
      private router: Router,
      private authService: AuthService) { }

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        'email': new FormControl(
          this.model.email, [
            Validators.required,
            Validators.email
          ]
        ),
        'password': new FormControl(
          this.model.password, [
            Validators.required,
            Validators.minLength(6)
          ]
        )
      })
    }
    get email() { return this.loginForm.get('email'); }

    get password() { return this.loginForm.get('password'); }

    /**
     * login a user
     * Navigate to user dashboard page on successful login
     *
     * @return {void}
     */
    login () {
      if (this.loginForm.value.email === '' || this.loginForm.value.password === '') {
        this.loginBorderColor = 'red';
      } else {
        this.loading = "block";
        this.authService.login(this.loginForm.value)
        .subscribe((response :Response) => {
          this.loading = "none";
          if (response.success === false) {
            this.errorMessage = 'Oops something went wrong';
          } else {
            localStorage.setItem('kombol-blog-token', response.data.token)
            localStorage.setItem('current-user-email', response.data.email)
            this.router.navigate(['/dashboard']);
          }
        });
      }  
    }
}
