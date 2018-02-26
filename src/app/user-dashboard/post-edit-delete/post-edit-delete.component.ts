import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { BlogPostService } from '../../services/blog-post.service'

@Component({
  selector: 'app-post-edit-delete',
  templateUrl: './post-edit-delete.component.html',
  styleUrls: ['./post-edit-delete.component.css']
})
export class PostEditDeleteComponent implements OnInit {

  @Input() postIndex;
  @Input() postId;
  @Input() authorId;
  @Input() blogPosts;
  @Output() updatedPosts = new EventEmitter<any[]>();
  modalOpen: boolean = false;
  modalDisplay: string;
  model: any = {};

  display: string;
  constructor(
    private blogPostService: BlogPostService
  ) { }

  ngOnInit() {
  }

  /**
   * Delete a post created by current user
   *
   * @return {void}
   */
  deletePost() {
    let postsAfterDelete = this.deleteCurrentPost(this.blogPosts)
    this.updatedPosts.emit(postsAfterDelete);
    this.blogPostService.deletePost(this.postId)
    .subscribe((response) => {
      console.log(response);
    })
  }

  /**
   * Edit a post created by current user
   *
   * @return {void}
   */
  editPost() {
    let postsAfterEdit = this.editCurrentPost(this.blogPosts);
    this.updatedPosts.emit(postsAfterEdit);
    this.openModal();
    this.blogPostService.editPost(this.postId, this.model)
    .subscribe((response) => {
      console.log(response);
    })
  }

  /**
   * Delete selected post created by current user
   *
   * @param {array} posts all posts created by current user
   *
   * @return {array} updated posts containing
   */
  deleteCurrentPost(posts: any[]) {
    let postExists;
    let currentPost;
    posts.forEach((member, index) => {
      if (member.id === this.postId && member.user_id === this.authorId) {
          postExists = true
          currentPost = index
      }
    });
    if (postExists === true) {
      posts.splice(currentPost, 1);
    }
    return posts;
  }


  /**
   * Edit selected post created by current user
   *
   * @param {array} posts all posts created by current user
   *
   * @return {array} posts containing updated post
   */
  editCurrentPost(posts: any[]) {
    posts.forEach((member) => {
      if (member.id === this.postId && member.user_id === this.authorId) {
        if (this.model.title === '') {
          member.title = member.title;
        } else if (this.model.content === '') {
          member.content = member.content;
        } else {
          member.title = this.model.title;
          member.content = this.model.content;
        }
      }
    });
    return posts;
  }

  /**
   * Open or close a modal to edit a post
   *
   * @return {void}
   */
  openModal() {
    if (this.modalOpen === false) {
      this.modalDisplay = 'block'
      this.modalOpen = true;
    } else if (this.modalOpen === true) {
      this.modalDisplay = 'none';
      this.modalOpen = false;
    }
  }
}
