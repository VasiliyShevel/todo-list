import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { TodosService } from '../../services/todos.service';

import { IUser } from '../../interfaces/iUser';
import { ITodoItem } from '../../interfaces/iTodoItem';

@Component({
    selector: 'new-todo',
    templateUrl: './app/components/new-todo/new-todo.component.html',
    styleUrls: ['./app/components/new-todo/new-todo.component.css']
})

export class NewTodoComponent {

    constructor(private todosService: TodosService) {}

    form: FormGroup = new FormGroup({
        title: new FormControl('', [Validators.required,Validators.minLength(3)]),
        description: new FormControl('', [Validators.required,Validators.minLength(3)]),
        required: new FormControl(false),
        shared: new FormControl(false),
        done: new FormControl(false),
        hidden: new FormControl(false),
    });

    @Input('init')
    userId: number;

    @Output('popupClose')
    public popupClosed = new EventEmitter<{value: boolean}>();

    addTodo() {
        let todo = Object.assign({}, this.form.value);
        todo.userId = this.userId;
        this.todosService.addTodo(todo).subscribe(
            (todos: Array<ITodoItem>) => {},
            (error: Error) => console.error('Error: ' + error),
            () => this.closePopup()
        );
    }

    closePopup() {
        event.preventDefault();
        this.popupClosed.emit({
            value: false
        });
    }
}