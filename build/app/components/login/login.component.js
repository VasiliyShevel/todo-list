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
var router_1 = require('@angular/router');
var login_service_1 = require('../../services/login.service');
var auth_service_1 = require('../../services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(router, LoginService, authService) {
        this.router = router;
        this.LoginService = LoginService;
        this.authService = authService;
        this.isFormInvalid = false;
        this.loggedIn = false;
        this.username = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            user: new forms_1.FormGroup({
                login: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
                password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
            })
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.LoginService.loginUser().subscribe(
        //TODO change type any
        function (users) {
            var user = users.find(_this.checkLogin.bind(_this));
            if (user) {
                _this.authService.setCurrentUser(user);
                var auth_token = Math.random().toString(36).substr(2);
                _this.authService.setToken(auth_token);
                _this.isFormInvalid = false;
                _this.router.navigateByUrl("home");
            }
            else {
                _this.isFormInvalid = true;
            }
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    LoginComponent.prototype.checkLogin = function (user) {
        var login = this.form.value.user.login;
        var password = this.form.value.user.password;
        return (user.login === login && user.password === password);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "username", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/login/login.component.html',
            styleUrls: ['./app/components/login/login.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map