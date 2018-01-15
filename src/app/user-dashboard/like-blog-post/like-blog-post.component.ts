import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service'
import { localStorage } from '../../global';

@Component({
  selector: 'app-like-blog-post',
  templateUrl: './like-blog-post.component.html',
  styleUrls: ['./like-blog-post.component.css']
})
export class LikeBlogPostComponent implements OnInit {

  @Input() postId;
  @Input() authorId
  postLikes = [];
  currentUserEmail: string
  like = false;

  constructor(
    private blogPostService: BlogPostService
  ) {
    this.currentUserEmail = localStorage.getItem('current-user-email')
  }

  ngOnInit() {
    this.getPostLikes(this.postId);
  }

  likePost() {
    this.currentUserLikedPost(this.postLikes);
    this.blogPostService.likePost(this.postId)
    .subscribe((response) => {
      console.log(response);
    })
  }

  getPostLikes(postId) {
    this.blogPostService.getPostLikes(this.postId)
    .subscribe((response) => {
      this.postLikes = response.post_likes;
    })
  }

  currentUserLikedPost(postLikes: any[]) {
    let likedPost;
    let currentUser;
    postLikes.forEach((member, index) => {
        if (member.email === this.currentUserEmail) {
            likedPost = true
            currentUser = index
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

