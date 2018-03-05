import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
    moduleId: module.id,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    model = {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
    registerBorderColor: string;
    registrationForm: FormGroup
    errorMessage: string;
    loading: string;

    constructor(
      private router: Router,
      private userService: UserService) { }

    ngOnInit(): void {
      this.registrationForm = new FormGroup({
        'username': new FormControl(
          this.model.username, [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
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
        ),
        'password_confirmation': new FormControl(
          this.model.password_confirmation, [
            Validators.required,
            Validators.minLength(6)
          ]
        )
      })
    }
    get email() { return this.registrationForm.get('email'); }

    get username() { return this.registrationForm.get('username'); }

    get password() { return this.registrationForm.get('password'); }

    get password_confirmation() { return this.registrationForm.get('password_confirmation'); }

    /**
     * Register a user
     * Navigate to login page on successful registration
     *
     * @return {void}
     */
    register() {
      if (this.registrationForm.value.username === '' ||
        this.registrationForm.value.email === '' ||
        this.registrationForm.value.password === '' ||
        this.registrationForm.value.password_confirmation === ''
    ) {
      this.registerBorderColor = 'red';
    } else {
      this.registerBorderColor = '';
      this.loading = "block";
      this.userService.registerUser(this.registrationForm.value)
        .subscribe((response) => {
          this.loading = "none";
          if (response.success === false) {
            this.errorMessage = 'Oops something went wrong';
          } else {
            this.router.navigate(['/login']);
          }
        });
    }
      
    }
}
