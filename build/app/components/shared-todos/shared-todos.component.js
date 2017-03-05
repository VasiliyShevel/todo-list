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
var todos_service_1 = require('../../services/todos.service');
var auth_service_1 = require('../../services/auth.service');
var SharedTodosComponent = (function () {
    function SharedTodosComponent(todosService, authService) {
        this.todosService = todosService;
        this.authService = authService;
    }
    SharedTodosComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    SharedTodosComponent.prototype.getData = function () {
        var _this = this;
        this.todosService.getTodos().subscribe(function (todos) {
            _this.todos = todos.filter(function (todo) {
                return (todo.hidden === false && todo.shared === true);
            });
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    SharedTodosComponent.prototype.done = function (todo) {
        todo.done = todo.done === true ? false : true;
        this.todosService.sendData(todo.id, todo).subscribe(function (todos) { }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    SharedTodosComponent.prototype.remove = function (todo) {
        var _this = this;
        todo.hidden = true;
        this.todosService.sendData(todo.id, todo).subscribe(function (todos) { }, function (error) { return console.error('Error: ' + error); }, function () { return _this.getData(); });
    };
    SharedTodosComponent = __decorate([
        core_1.Component({
            selector: 'shared-todos',
            templateUrl: './app/components/shared-todos/shared-todos.component.html',
            styleUrls: ['./app/components/shared-todos/shared-todos.component.css'],
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService, auth_service_1.AuthService])
    ], SharedTodosComponent);
    return SharedTodosComponent;
}());
exports.SharedTodosComponent = SharedTodosComponent;
//# sourceMappingURL=shared-todos.component.js.map