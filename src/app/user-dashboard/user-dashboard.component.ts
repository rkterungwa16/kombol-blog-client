import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service'

@Component({
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  blogPosts = [];

  constructor (
    private blogService: BlogPostService
  ) {}

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogService.getBlogPost()
    .subscribe((response) => {
      console.log(response);
      this.blogPosts = response;
    });
  }
}
