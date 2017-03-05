"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var todos_service_1 = require('../../services/todos.service');
var NewTodoComponent = (function () {
    function NewTodoComponent(todosService) {
        this.todosService = todosService;
        this.form = new forms_1.FormGroup({
            title: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            description: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            required: new forms_1.FormControl(false),
            shared: new forms_1.FormControl(false),
            done: new forms_1.FormControl(false),
            hidden: new forms_1.FormControl(false),
        });
        this.popupClosed = new core_1.EventEmitter();
    }
    NewTodoComponent.prototype.addTodo = function () {
        var _this = this;
        var todo = Object.assign({}, this.form.value);
        todo.userId = this.userId;
        this.todosService.addTodo(todo).subscribe(function (todos) { }, function (error) { return console.error('Error: ' + error); }, function () { return _this.closePopup(); });
    };
    NewTodoComponent.prototype.closePopup = function () {
        event.preventDefault();
        this.popupClosed.emit({
            value: false
        });
    };
    __decorate([
        core_1.Input('init'), 
        __metadata('design:type', Number)
    ], NewTodoComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Output('popupClose'), 
        __metadata('design:type', Object)
    ], NewTodoComponent.prototype, "popupClosed", void 0);
    NewTodoComponent = __decorate([
        core_1.Component({
            selector: 'new-todo',
            templateUrl: './app/components/new-todo/new-todo.component.html',
            styleUrls: ['./app/components/new-todo/new-todo.component.css']
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService])
    ], NewTodoComponent);
    return NewTodoComponent;
}());
exports.NewTodoComponent = NewTodoComponent;
//# sourceMappingURL=new-todo.component.js.map