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
var register_service_1 = require('../../services/register.service');
var users_service_1 = require('../../services/users.service');
var RegisterComponent = (function () {
    function RegisterComponent(RegisterService, router, usersService) {
        this.RegisterService = RegisterService;
        this.router = router;
        this.usersService = usersService;
        this.isFormInvalid = false;
        this.form = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
            login: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
        });
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (users) {
            _this.reservedLogin = users.some(_this.checkLogin.bind(_this));
            if (!_this.reservedLogin) {
                _this.RegisterService.registerUser(_this.form.value).subscribe(function (user) { }),
                    function (error) { return console.error('Error: ' + error); };
                _this.isFormInvalid = false;
                _this.router.navigateByUrl("login");
            }
            else {
                _this.isFormInvalid = true;
            }
        }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    RegisterComponent.prototype.checkLogin = function (user) {
        var login = this.form.value.login;
        return (user.login === login);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: './app/components/register/register.component.html',
            styleUrls: ['./app/components/register/register.component.css']
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService, router_1.Router, users_service_1.UsersService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map