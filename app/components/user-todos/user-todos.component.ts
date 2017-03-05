import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { TodosService } from '../../services/todos.service';
import { AuthService } from '../../services/auth.service';

import { ITodoItem } from '../../interfaces/ITodoItem';
import { IUser } from '../../interfaces/IUser';

@Component({
    selector: 'user-todos',
    templateUrl: './app/components/user-todos/user-todos.component.html',
    styleUrls: ['./app/components/user-todos/user-todos.component.css']
})

export class UserTodosComponent implements OnInit {
    public todos: Array<ITodoItem>;
    isPopupActive:boolean =  false;
    public userId = 1;
    public user: IUser = JSON.parse(this.authService.getCurrentUser());

    constructor(private todosService: TodosService, private authService: AuthService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.todosService.getTodos().subscribe(
            (todos: Array<ITodoItem>) => {
                this.todos = todos.filter((todo: ITodoItem) => {
                    return (todo.hidden === false && todo.userId === this.user.id );
                });
            },
            (error: Error) => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    done(todo: ITodoItem) {
        todo.done = !todo.done;
        this.todosService.sendData(todo.id, todo).subscribe(
            (todos: Array<ITodoItem>) => {},
            (error: Error) => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    remove(todo: ITodoItem) {
        todo.hidden =  true;
        this.todosService.sendData(todo.id, todo).subscribe(
            (todos: Array<ITodoItem>) => {},
            (error: Error) => console.error('Error: ' + error),
            () => this.getData()
        );
    }

    openPopup() {
        this.isPopupActive = true;
        this.userId = this.user.id;
    }

    closePopup($event: any): void{
        this.isPopupActive = $event.value;
        this.getData();
    }
}