import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user.class';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false;
  userLogged: any;

  constructor(private http: HttpClient) {}

  signIn(user: User) {
    this.isLogged = true;
    this.userLogged = JSON.parse(localStorage.getItem('userLogged')!);
    console.log(this.userLogged);
    return this.http.post(environment.urlAPI + 'signin', user);
  }

  signUp(user: User) {
    return this.http.post(environment.urlAPI + 'users', user);
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
