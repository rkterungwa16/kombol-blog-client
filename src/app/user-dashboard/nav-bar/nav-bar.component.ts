import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  currentUser: any = {};

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  /**
   * Logout
   */
  logOut() {
    localStorage.removeItem('kombol-blog-token');
    localStorage.removeItem('current-user-email');
    this.router.navigate(['/register']);
  }

  /**
   * Get current user
   *
   */
  getCurrentUser() {
    this.userService.getUser()
    .subscribe((response) => {
      this.currentUser = response.user;
    })
  }

}
