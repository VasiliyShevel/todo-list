import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/IUser';

@Component({
    selector: 'register',
    templateUrl: './app/components/register/register.component.html',
    styleUrls: ['./app/components/register/register.component.css']
})

export class RegisterComponent{
    public reservedLogin: boolean;
    public isFormInvalid: boolean = false;

    constructor(
        private RegisterService: RegisterService,
        private router: Router, 
        private usersService: UsersService
    ) {}

    form: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
        login: new FormControl('', [Validators.required,Validators.minLength(3)]),
        password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });

    register(): void {
        this.usersService.getUsers().subscribe(
            (users: Array<IUser>) => {
                this.reservedLogin = users.some(this.checkLogin.bind(this))
                if (!this.reservedLogin) {
                    this.RegisterService.registerUser(this.form.value).subscribe(
                        (user: IUser) => {}
                    ),
                    (error: Error) => console.error('Error: ' + error)
                    this.isFormInvalid = false;
                    this.router.navigateByUrl("login");
                } else {
                    this.isFormInvalid = true;
                }
            },
            (error: Error) => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    checkLogin(user: IUser) {
        let login = this.form.value.login;
        return (user.login === login);
    }
}