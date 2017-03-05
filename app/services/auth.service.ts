import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { IUser } from '../interfaces/IUser';

@Injectable()
export class AuthService {

  constructor(private http: Http) {}

  setCurrentUser(user: IUser): void {
    localStorage.setItem('current_user', JSON.stringify(user));
  }

  getCurrentUser(): string {
    return localStorage.getItem('current_user');
  }

  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): void {
    localStorage.getItem('auth_token');
  }

  logOut(): void {
    localStorage.removeItem('current_user');
    localStorage.removeItem('auth_token');
  }
}