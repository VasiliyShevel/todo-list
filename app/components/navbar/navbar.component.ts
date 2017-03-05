import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'navbar',
    templateUrl: './app/components/navbar/navbar.component.html',
    styleUrls: ['./app/components/navbar/navbar.component.css']
})

export class NavbarComponent{
    constructor(private router: Router, private authService: AuthService) {}

    @Input('init')
    user: string;

    logout(event: Event) {
        event.preventDefault();
        this.authService.logOut();
        this.router.navigateByUrl('login');
    }
}
