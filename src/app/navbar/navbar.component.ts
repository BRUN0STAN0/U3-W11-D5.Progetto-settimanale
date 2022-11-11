import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../classes/user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: User;
  users!: User[];
  constructor(private usersService: UsersService, private authService: AuthService) {}

  ngOnInit() {
    this.usersService.getUser(2).subscribe((data) => (this.user = data));
  }
}
