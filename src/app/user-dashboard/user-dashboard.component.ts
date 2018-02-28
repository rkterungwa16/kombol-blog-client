import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service'
import { UserService } from '../services/user.service'
import { localStorage } from '../global';

@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  blogPosts = [];
  currentUser: any = {};

  constructor (
    private blogService: BlogPostService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getBlogPosts();
    this.getCurrentUser();
  }

  /**
   * Get all blog posts by a current user
   */
  getBlogPosts() {
    this.blogService.getBlogPost()
    .subscribe((response) => {
      console.log(response);
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
}
