import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPostService } from '../services/blog-post.service'
import { UserService } from '../services/user.service'

@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  blogPosts = [];
  currentUser: any = {};
  loading: boolean;

  constructor (
    private blogService: BlogPostService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBlogPosts();
    this.getCurrentUser();
  }

  /**
   * Get all blog posts by a current user
   */
  getBlogPosts() {
    this.loading = true;
    this.blogService.getBlogPost()
    .subscribe((response) => {
      this.loading = false;
      this.blogPosts = response;
    });
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

  /**
   * Logout
   */
  logOut() {
    localStorage.removeItem('kombol-blog-token');
    localStorage.removeItem('current-user-email');
    this.router.navigate(['/register']);
  }
}
