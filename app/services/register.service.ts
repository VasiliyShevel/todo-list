import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppSettings } from '../config/config';

import { IUser } from '../interfaces/IUser';

@Injectable()
export class RegisterService {
  private apiUrl: string = AppSettings.apiUrl;
    
  constructor(private http: Http) {}

  headers = new Headers({
    "Content-Type": "application/json",
  });

  registerUser(body: IUser): Observable<IUser> {
    return this.http.post(`${this.apiUrl}/users`, body, {headers: this.headers}).map((res: Response) => res.json());
  }
}