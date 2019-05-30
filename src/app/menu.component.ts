import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user-list/user-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  get login() {
    if (this.authService.currentUser != null) {
      return false;
    }
    return true;
  }
  constructor(private authService: UserAuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}
