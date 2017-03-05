import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppSettings } from '../config/config';

import { IUser } from '../interfaces/IUser';

@Injectable()
export class UsersService {
  private apiUrl: string = AppSettings.apiUrl;

  constructor(private http: Http) {}

  getUsers(): Observable<Array<IUser>> {
    return this.http.get(`${this.apiUrl}/users`).map((res: Response) => res.json());
  }

  changeUserData(id: string, body: any): Observable<Array<IUser>> {
    return this.http.put(`${this.apiUrl}/users/${id}`, body).map((res: Response) => res.json());
  }
}