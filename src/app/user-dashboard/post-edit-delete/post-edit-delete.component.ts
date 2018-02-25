import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  deletePost() {
    let postsAfterDelete = this.deleteCurrentPost(this.blogPosts)
    this.updatedPosts.emit(postsAfterDelete);
  }

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
