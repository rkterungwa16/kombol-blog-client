import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostService } from '../../services/blog-post.service';

@Component({
  templateUrl: 'publish-blog-post.component.html',
  styleUrls: ['publish-blog-post.component.css']
})

export class PublishBlogPostComponent {
  model: any = {};
  titleBorderColor = '';
  contentBorderColor = '';

  constructor(
    private router: Router,
    private blogPostService: BlogPostService
  ) {}

  /**
   * Create a new blog post by current user
   */
  publish() {
    if (this.model.title === undefined) {
      this.titleBorderColor = 'red';
    } else if (this.model.content === undefined) {
      this.contentBorderColor = 'red';
    }else {
      this.blogPostService.publishBlogPost(this.model)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      })
    }

  }
}
