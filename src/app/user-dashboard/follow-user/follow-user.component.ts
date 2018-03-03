import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-follow-user',
  templateUrl: './follow-user.component.html',
  styleUrls: ['./follow-user.component.css']
})
export class FollowUserComponent implements OnInit {
  @Input() userId
  @Input() postIndex
  @Input() currentUser
  follow = 'following'
  errorMessage: string
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isFollowing();
  }

  /**
   * Follow a user by the current user
   *
   * @return {void}
   */
  followUser() {
    if (this.currentUser.user.id === this.userId) {
      this.errorMessage = 'You cannot follow your self';
    } else {
      this.userService.followAUser(this.userId)
      .subscribe((response) => {
        if (response.success === true) {
          this.follow = 'following';
        } else if (response.success === false) {
          this.follow = 'follow';
        }
      })
    }
  }

  /**
   * Current user is following another user
   *
   * @return {void}
   */
  isFollowing() {
    this.userService.currentUserIsFollowing(this.userId)
    .subscribe((response) => {
      if (response.is_following === true) {
        this.follow = 'following';
      } else {
        this.follow = 'follow';
      }
    })
  }
}

