import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterRoutesModule } from './register-router.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutesModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
