import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutesModule } from './login-router.module'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    CommonModule,
    LoginRoutesModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
