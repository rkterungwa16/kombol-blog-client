import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})

export class DropdownListComponent implements OnInit {
  @Input() postIndex;
  @Input() postId;
  @Input() authorId;
  @Input() blogPosts;
  @Output() updatedPosts = new EventEmitter<any[]>();

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
}
