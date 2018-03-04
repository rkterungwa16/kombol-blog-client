import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostService } from '../../services/blog-post.service';

@Component({
  templateUrl: 'publish-blog-post.component.html',
  styleUrls: ['publish-blog-post.component.css']
})

export class PublishBlogPostComponent {
  model: any = {};
  publishTitleBorderColor = '';
  publishContentBorderColor = '';

  constructor(
    private router: Router,
    private blogPostService: BlogPostService
  ) {}

  /**
   * Create a new blog post by current user
   */
  publish() {
    if (this.model.title === undefined ||
      this.model.title.startsWith(' ') ||
      this.model.title.length < 6
    ) {
      this.publishTitleBorderColor = 'red';
    } else if (this.model.content === undefined ||
      this.model.content.startsWith(' ') ||
      this.model.content.length < 6
    ) {
      this.publishContentBorderColor = 'red';
    }else {
      this.blogPostService.publishBlogPost(this.model)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      })
    }

  }
}
