import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/classes/user.class';
import { UsersService } from 'src/app/users.service';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user!: User;
  constructor(private authService: AuthService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUser(this.authService.userLogged.user.id).subscribe((data) => (this.user = data));
  }
}
