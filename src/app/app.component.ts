import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginResponse } from './services/api.service';
import { AuthenticationService } from './services/authenthication.service';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: ILoginResponse;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}