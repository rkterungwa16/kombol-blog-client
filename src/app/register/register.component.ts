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

export class RegisterComponent {
    model: any = {};

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.userService.registerUser(this.model)
          .subscribe((response) => {
            this.router.navigate(['/login']);
          });
    }
}
