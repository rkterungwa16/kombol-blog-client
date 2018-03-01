import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  blogPosts = [];
  currentUser: any = {};

  constructor (
    private blogService: BlogPostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllBlogPosts();
  }

  /**
   * Get all blog posts by a current user
   */
  getAllBlogPosts() {
    this.blogService.getAllBlogPosts()
    .subscribe((response) => {
      console.log(response);
      this.blogPosts = response.all_posts;
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
