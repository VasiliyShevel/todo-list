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
var register_service_1 = require('../../services/register-service');
var RegisterFormComponent = (function () {
    function RegisterFormComponent(RegisterService) {
        this.RegisterService = RegisterService;
        this.form = new forms_1.FormGroup({
            userData: new forms_1.FormGroup({
                firstName: new forms_1.FormControl(''),
                lastName: new forms_1.FormControl(''),
                age: new forms_1.FormControl(''),
                sex: new forms_1.FormControl('')
            }),
            userInfo: new forms_1.FormGroup({
                hobby: new forms_1.FormControl(''),
                music: new forms_1.FormControl(''),
                food: new forms_1.FormControl('')
            }),
            userAddress: new forms_1.FormGroup({
                country: new forms_1.FormControl(''),
                city: new forms_1.FormControl(''),
                street: new forms_1.FormControl(''),
                address: new forms_1.FormControl('')
            }),
        });
    }
    RegisterFormComponent.prototype.sendData = function () {
        this.RegisterService.registerUser('http://localhost:8000/users', this.form.value).subscribe(function (user) { return console.log(user); }, function (error) { return console.error('Error: ' + error); }, function () { return console.log('Completed!'); });
    };
    RegisterFormComponent = __decorate([
        core_1.Component({
            selector: 'register-form',
            templateUrl: './app/components/register-form/register-form.component.html'
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());
exports.RegisterFormComponent = RegisterFormComponent;
//# sourceMappingURL=register-form.component.js.map