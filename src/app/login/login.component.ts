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

export class LoginComponent {
    model: any = {};
    loading = false;

    constructor(
      private router: Router,
      private authService: AuthService) { }

    login () {
      this.loading = true;
      this.authService.login(this.model)
        .subscribe((response) => {
          localStorage.setItem('kombol-blog-token', response.data.token)
          localStorage.setItem('current-user-email', response.data.email)
          this.router.navigate(['/dashboard']);
        });
    }
}
