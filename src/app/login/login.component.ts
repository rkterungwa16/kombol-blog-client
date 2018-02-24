import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { localStorage } from '../global';

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
    errorMessage: string;
    loading = false;

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

    login () {
      this.loading = true;
      this.authService.login(this.loginForm.value)
        .subscribe((response) => {
          localStorage.setItem('kombol-blog-token', response.data.token)
          localStorage.setItem('current-user-email', response.data.email)
          this.router.navigate(['/dashboard']);
        });
    }
}
