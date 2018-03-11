import {
  Component,
  OnInit,
  Input,
  Output
} from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-comment-on-blog-post',
  templateUrl: './comment-on-blog-post.component.html',
  styleUrls: ['./comment-on-blog-post.component.css']
})
export class CommentOnBlogPostComponent implements OnInit {

  @Input() postId;
  @Input() postIndex;
  @Input() currentUser;
  model: any = {};
  postComments = [];
  commentOpen = false;
  commentDisplay: string;
  commentMessage: string;
  error: boolean;
  success: boolean;
  borderColor = '';
  constructor(
    private blogService: BlogPostService,
  ) { }

  ngOnInit() {
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
    if (this.model.comment === undefined ||
      this.model.comment.startsWith(' ') ||
      this.model.comment.length < 6
    ) {
      this.borderColor = 'red';
    } else {
      this.borderColor = '';
      this.postComments.push({
        comment: this.model.comment,
        username: this.currentUser.username,
        user_id: this.currentUser.id
      });
      this.blogService.commentOnPost(this.postId, this.model )
      .subscribe((response) => {
        this.success = response.success;
      });
      this.model.comment = '';
    }
  }

  /**
   * Get all comments on a blog post
   *
   */
  getCommentsOnPost() {
    this.blogService.getAllPostComments(this.postId)
    .subscribe((response) => {
      this.postComments = response.post_comments;
    });
  }

  /**
   * Hide or show comments
   *
   * @return {void}
   */
  showOrHideComments() {
    if (this.commentOpen === false) {
      this.commentDisplay = 'block';
      this.commentOpen = true;
      this.commentMessage = 'Hide comments';
    } else if (this.commentOpen === true) {
      this.commentDisplay = 'none';
      this.commentOpen = false;
      this.commentMessage = 'Show comments';
    }
  }

  /**
   * Delete a comment
   *
   * @param {array} commentId comment id
   *
   * @return {void}
   */
  deleteComment(commentId) {
    this.deleteCurrentComment(commentId);
    this.blogService.deletePostComment(commentId)
    .subscribe((response) => {
      this.success = response.success;
    });
  }

  /**
   * Delete selected comment created by current user dynamically
   *
   * @param {array} commentId comment id
   *
   * @return {void}
   */
  deleteCurrentComment(commentId) {
    let currentComment;
    this.postComments.forEach((member, index) => {
      if (member.id === commentId) {
          currentComment = index;
      }
    });
    this.postComments.splice(currentComment, 1);
  }
}
