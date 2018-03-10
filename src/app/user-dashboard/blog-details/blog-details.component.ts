import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  param: string;
  post: any = {};
  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id']; // --> Name must match wanted parameter
    });

    this.getOnePost(this.param);
  }

  /**
   * Comment on a blog post
   *
   * @return {void}
   */
  getOnePost(postId) {
    this.blogPostService.getOnePost(postId)
      .subscribe((response) => {
        this.post = response.post;
      });
  }
}
