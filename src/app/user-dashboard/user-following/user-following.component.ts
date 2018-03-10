import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-following',
  templateUrl: './user-following.component.html',
  styleUrls: ['./user-following.component.css']
})
export class UserFollowingComponent implements OnInit {

  usersFollowing = [];
  loading: boolean;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCurrentUserFollowing();
  }

  /**
   * Get registered user current user is following
   *
   */
  getCurrentUserFollowing() {
    this.loading = true;
    this.userService.getCurrentUserFollowing()
    .subscribe((response) => {
      console.log('I am following these people', response);
      this.loading = false;
      this.usersFollowing = response.followers;
    });
  }
}
