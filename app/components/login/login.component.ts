import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { Response } from '@angular/http';

import { LoginService} from '../../services/login.service';
import { AuthService} from '../../services/auth.service';

import { IUser } from '../../interfaces/IUser';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
    styleUrls:['./app/components/login/login.component.css'],
})

export class LoginComponent {
    public isFormInvalid: boolean = false;
    public loggedIn: boolean = false;

    constructor(private router: Router, private LoginService: LoginService, private authService: AuthService,) {}

    @Output()
    public username = new EventEmitter<any>();

    form: FormGroup = new FormGroup({
        user: new FormGroup({
            login: new FormControl('', [Validators.required,Validators.minLength(3)]),
            password: new FormControl('', [Validators.required,Validators.minLength(6)])
        })
    });

    login(): void {
        this.LoginService.loginUser().subscribe(
            //TODO change type any
            (users: Array<IUser>) => {
                let user = users.find(this.checkLogin.bind(this));
                if (user) {
                    this.authService.setCurrentUser(user);
                    let auth_token = Math.random().toString(36).substr(2);
                    this.authService.setToken(auth_token);
                    this.isFormInvalid = false;
                    this.router.navigateByUrl("home");
                } else {
                    this.isFormInvalid = true;
                }
            },
            (error: Error) => console.error('Error: ' + error),
            () => console.log('Completed!')
        );
    }

    checkLogin(user: IUser) {
        let login = this.form.value.user.login;
        let password = this.form.value.user.password;
        return (user.login === login && user.password === password);
    }
}