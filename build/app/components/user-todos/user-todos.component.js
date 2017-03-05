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
var UserTodosComponent = (function () {
    function UserTodosComponent(todosService, authService) {
        this.todosService = todosService;
        this.authService = authService;
        this.isPopupActive = false;
        this.userId = 1;
        this.user = JSON.parse(this.authService.getCurrentUser());
    }
    UserTodosComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UserTodosComponent.prototype.getData = function () {
        var _this = this;
        this.todosService.getTodos().subscribe(function (todos) {
            _this.todos = todos.filter(function (todo) {
                return (todo.hidden === false && todo.userId === _this.user.id);
            });
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    UserTodosComponent.prototype.done = function (todo) {
        todo.done = !todo.done;
        this.todosService.sendData(todo.id, todo).subscribe(function (todos) { }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    UserTodosComponent.prototype.remove = function (todo) {
        var _this = this;
        todo.hidden = true;
        this.todosService.sendData(todo.id, todo).subscribe(function (todos) { }, function (error) { return console.error('Error: ' + error); }, function () { return _this.getData(); });
    };
    UserTodosComponent.prototype.openPopup = function () {
        this.isPopupActive = true;
        this.userId = this.user.id;
    };
    UserTodosComponent.prototype.closePopup = function ($event) {
        this.isPopupActive = $event.value;
        this.getData();
    };
    UserTodosComponent = __decorate([
        core_1.Component({
            selector: 'user-todos',
            templateUrl: './app/components/user-todos/user-todos.component.html',
            styleUrls: ['./app/components/user-todos/user-todos.component.css']
        }), 
        __metadata('design:paramtypes', [todos_service_1.TodosService, auth_service_1.AuthService])
    ], UserTodosComponent);
    return UserTodosComponent;
}());
exports.UserTodosComponent = UserTodosComponent;
//# sourceMappingURL=user-todos.component.js.map