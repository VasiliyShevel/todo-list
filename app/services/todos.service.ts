import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppSettings } from '../config/config';

import { ITodoItem } from '../interfaces/iTodoItem';

@Injectable()
export class TodosService {
  private apiUrl: string = AppSettings.apiUrl;
    
  constructor(private http: Http) {}

  headers = new Headers({
    "Content-Type": "application/json",
  });

  getTodos(): Observable<Array<ITodoItem>> {
    return this.http.get(`${this.apiUrl}/todos`).map((res: Response) => res.json());
  }

  sendData(id: number, body: ITodoItem): Observable<Array<ITodoItem>> {
    return this.http.put(`${this.apiUrl}/todos/${id}`, body, {headers: this.headers}).map((res: Response) => res.json());
  }

  addTodo(body: ITodoItem): Observable<Array<ITodoItem>> {
    return this.http.post(`${this.apiUrl}/todos`, body, {headers: this.headers}).map((res: Response) => res.json());
  }
}