import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

import { IUser } from '../../interfaces/iUser';

@Component({
    selector: 'user-info',
    templateUrl: './app/components/user-info/user-info.component.html',
    styleUrls: ['./app/components/user-info/user-info.component.css']
})

export class UserInfoComponent {
    public user: IUser = JSON.parse(this.authService.getCurrentUser());
    public isPopupActive: boolean = false;

    constructor(private authService: AuthService, private usersService: UsersService) {}

    @Output('change')
    dataChanged = new EventEmitter<IUser>();

    form: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        lastName: new FormControl('', [Validators.required,Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.pattern('[^@]+@[^@]+\.[a-zA-Z]{2,6}')]),
        login: new FormControl('', [Validators.required,Validators.minLength(3)]),
        password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });

    editUserData() {
        let data = Object.assign({}, this.form.value);
        data.id = this.user.id;
        this.usersService.changeUserData(data.id, data).subscribe(
            (user: Array<IUser>) => {
                this.user = data;
                this.authService.setCurrentUser(data);
                this.dataChanged.emit({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    login: data.login,
                    password: data.password,
                    id: data.id,
                });
            },
            (error: Error) => console.error('Error: ' + error),
            () => this.closePopup()
        );
    }

    openPopup() {
        this.isPopupActive = true;
        this.form.patchValue({
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            email: this.user.email,
            login: this.user.login,
            password: this.user.password
        })
    }

    closePopup() {
        event.preventDefault();
        this.isPopupActive = false;
    }
}