import {
  Component,
  OnInit,
  Input,
  Output
} from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service'
import { UserService } from '../../services/user.service'
import { localStorage } from '../../global';

@Component({
  selector: 'app-comment-on-blog-post',
  templateUrl: './comment-on-blog-post.component.html',
  styleUrls: ['./comment-on-blog-post.component.css']
})
export class CommentOnBlogPostComponent implements OnInit {

  @Input() postId;
  @Input() postIndex;
  model: any = {};
  postComments: any[];
  currentUser: any = {};
  commentOpen: boolean = false;
  commentDisplay: string;
  commentMessage: string;
  constructor(
    private blogService: BlogPostService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this.getCommentsOnPost();
    this.commentOpen = false;
    this.commentDisplay = 'none';
    this.commentMessage = 'Show comments';
  }

  /**
   * Comment on a blog post
   *
   */
  commentOnPost() {
    this.postComments.push({
      comment: this.model.comment,
      username: this.currentUser.username
    });
    this.blogService.commentOnPost(this.postId, this.model )
    .subscribe((response) => {
      console.log(response)
    })
    this.model.comment = '';
  }

  /**
   * Get all comments on a blog post
   *
   */
  getCommentsOnPost() {
    this.blogService.getAllPostComments(this.postId)
    .subscribe((response) => {
      this.postComments = response.post_comments;
    })
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
   * Hide or show comments
   *
   * @return {void}
   */
  showOrHideComments() {
    if (this.commentOpen === false) {
      this.commentDisplay = 'block'
      this.commentOpen = true;
      this.commentMessage = 'Hide comments';
      console.log('coments for this post', this.postComments);
    } else if (this.commentOpen === true) {
      this.commentDisplay = 'none';
      this.commentOpen = false;
      this.commentMessage = 'Show comments';
    }
  }
}