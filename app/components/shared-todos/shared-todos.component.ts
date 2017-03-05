import { Component, OnInit, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import { TodosService } from '../../services/todos.service';
import { AuthService } from '../../services/auth.service';
import { ITodoItem } from '../../interfaces/ITodoItem';

@Component({
    selector: 'shared-todos',
    templateUrl: './app/components/shared-todos/shared-todos.component.html',
    styleUrls: ['./app/components/shared-todos/shared-todos.component.css'],
})

export class SharedTodosComponent implements OnInit {
    public todos: Array<ITodoItem>;

    constructor(private todosService: TodosService, private authService: AuthService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.todosService.getTodos().subscribe(
            (todos: Array<ITodoItem>) => {
                this.todos = todos.filter((todo: ITodoItem) => {
                    return (todo.hidden === false && todo.shared === true );
                });
            },
            (error: Error) => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    done(todo: ITodoItem) {
        todo.done = todo.done === true ? false : true;
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
}