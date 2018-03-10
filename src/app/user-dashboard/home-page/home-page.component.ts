import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  blogPosts = [];
  currentUser: any = {};
  loading: boolean;
  modalDisplay: string;
  modalOpen = false;
  postId: number;
  postAuthor: string;
  postAuthorId: number;
  postIndex: number;

  constructor (
    private blogService: BlogPostService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllBlogPosts();
    this.getCurrentUser();
  }

  /**
   * Get all blog posts by a current user
   */
  getAllBlogPosts() {
    this.loading = true;
    this.blogService.getAllBlogPosts()
    .subscribe((response) => {
      this.loading = false;
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
    });
  }

  /**
   * Open or close a modal to edit a post
   *
   * @return {void}
   */
  openModal(value) {
    if (this.modalOpen === false) {
      this.modalDisplay = 'block';
      this.modalOpen = true;
      this.postAuthor = value.postAuthor;
      this.postAuthorId = value.postAuthorId;
      this.postIndex = value.postIndex;
      this.postId = value.postId;
    } else if (this.modalOpen === true) {
      this.modalDisplay = 'none';
      this.modalOpen = false;
    }
  }
}
