import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlogPostService } from '../../services/blog-post.service';

@Component({
  templateUrl: 'publish-blog-post.component.html',
  styleUrls: ['publish-blog-post.component.css']
})

export class PublishBlogPostComponent {
  model: any = {};

  constructor(
    private router: Router,
    private blogPostService: BlogPostService
  ) {}

  publish() {
    this.blogPostService.publishBlogPost(this.model)
    .subscribe((response) => {
      this.router.navigate(['/dashboard']);
      console.log(response);
    })
  }

}
