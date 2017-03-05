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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var config_1 = require('../config/config');
var TodosService = (function () {
    function TodosService(http) {
        this.http = http;
        this.apiUrl = config_1.AppSettings.apiUrl;
        this.headers = new http_1.Headers({
            "Content-Type": "application/json",
        });
    }
    TodosService.prototype.getTodos = function () {
        return this.http.get(this.apiUrl + "/todos").map(function (res) { return res.json(); });
    };
    TodosService.prototype.sendData = function (id, body) {
        return this.http.put(this.apiUrl + "/todos/" + id, body, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    TodosService.prototype.addTodo = function (body) {
        return this.http.post(this.apiUrl + "/todos", body, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    TodosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodosService);
    return TodosService;
}());
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map