import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.css']
})
export class UserFollowersComponent implements OnInit {

  userFollowers = [];
  loading: boolean;
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.getCurrentUserFollowers();
  }

  /**
   * Get current user followers
   *
   */
  getCurrentUserFollowers() {
    this.loading = true;
    this.userService.getCurrentUserFollowers()
    .subscribe((response) => {
      this.loading = false;
      this.userFollowers = response.followers;
    });
  }
}
