import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-like-blog-post',
  templateUrl: './like-blog-post.component.html',
  styleUrls: ['./like-blog-post.component.css']
})
export class LikeBlogPostComponent implements OnInit {

  @Input() postId;
  @Input() authorId;
  postLikes = [];
  currentUserEmail: string;
  like = false;
  success: boolean;

  constructor(
    private blogPostService: BlogPostService
  ) {
    this.currentUserEmail = localStorage.getItem('current-user-email');
  }

  ngOnInit() {
    this.getPostLikes(this.postId);
  }

  /**
   * Current user likes a post
   *
   * @return {void}
   */
  likePost() {
    this.currentUserLikedPost(this.postLikes);
    this.blogPostService.likePost(this.postId)
    .subscribe((response) => {
      this.success = response.success;
    });
  }

  /**
   * Get all likes for a blog post
   *
   * @return {void}
   */
  getPostLikes(postId) {
    this.blogPostService.getPostLikes(this.postId)
    .subscribe((response) => {
      this.postLikes = response.post_likes;
    });
  }

  /**
   * Enables current user to like and unlike a post
   *
   * @param {array} postLkes array of all likes in a post
   *
   * @return {array} an updated array indicating if current user
   * liked or unliked a post
   */
  currentUserLikedPost(postLikes: any[]) {
    let likedPost;
    let currentUser;
    postLikes.forEach((member, index) => {
        if (member.email === this.currentUserEmail) {
            likedPost = true;
            currentUser = index;
        } else {
          likedPost = false;
        }
    });

    if (likedPost === true) {
      postLikes.splice(currentUser, 1);
    } else {
      postLikes.push({
        email: this.currentUserEmail
      });
    }
    return postLikes;
  }
}

