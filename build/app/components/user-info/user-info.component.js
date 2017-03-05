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
var auth_service_1 = require('../../services/auth.service');
var users_service_1 = require('../../services/users.service');
var UserInfoComponent = (function () {
    function UserInfoComponent(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
        this.user = JSON.parse(this.authService.getCurrentUser());
        this.isPopupActive = false;
        this.dataChanged = new core_1.EventEmitter();
        this.form = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
            login: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(3)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
        });
    }
    UserInfoComponent.prototype.editUserData = function () {
        var _this = this;
        var data = Object.assign({}, this.form.value);
        data.id = this.user.id;
        this.usersService.changeUserData(data.id, data).subscribe(function (user) {
            _this.user = data;
            _this.authService.setCurrentUser(data);
            _this.dataChanged.emit({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                login: data.login,
                password: data.password,
                id: data.id,
            });
        }, function (error) { return console.error('Error: ' + error); }, function () { return _this.closePopup(); });
    };
    UserInfoComponent.prototype.openPopup = function () {
        this.isPopupActive = true;
        this.form.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            login: this.user.login,
            password: this.user.password
        });
    };
    UserInfoComponent.prototype.closePopup = function () {
        event.preventDefault();
        this.isPopupActive = false;
    };
    __decorate([
        core_1.Output('change'), 
        __metadata('design:type', Object)
    ], UserInfoComponent.prototype, "dataChanged", void 0);
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'user-info',
            templateUrl: './app/components/user-info/user-info.component.html',
            styleUrls: ['./app/components/user-info/user-info.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, users_service_1.UsersService])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.component.js.map