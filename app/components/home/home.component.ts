import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "../../services/auth.service";


@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html',
    styleUrls: ['./app/components/home/home.component.css']
})

export class HomeComponent {
    public user: string;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.user = JSON.parse(this.authService.getCurrentUser());
        if (!this.user) {
            this.router.navigateByUrl('login');
        }
    }

    changeUserInfo(data: any) {
        this.user = data;
    }
}