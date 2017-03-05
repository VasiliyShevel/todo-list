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
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.setCurrentUser = function (user) {
        //let currentUser = JSON.stringify(user);
        localStorage.setItem('current_user', user);
    };
    AuthService.prototype.getCurrentUser = function () {
        var user = localStorage.getItem('current_user');
        return user;
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem('auth_token', token);
    };
    AuthService.prototype.getToken = function () {
        localStorage.getItem('auth_token');
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('current_user');
        localStorage.removeItem('auth_token');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.1.js.map