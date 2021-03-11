import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '@app/_services';
import { AlertComponent } from "@app/_components/alert.component";

@Component({ 
    templateUrl: 'layout.component.html',
    styleUrls: ['layout.style.css']
})
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        // redirect to home if already logged in
        if (this.accountService.userValue) {
            this.router.navigate(['/home']);
        }
    }
}