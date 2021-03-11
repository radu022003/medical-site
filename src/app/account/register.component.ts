import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ 
    templateUrl: 'register.component.html',
    styleUrls: ['register.style.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    isDirty = true;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z- ]{2,30}\s*){1,5}$')]],
            lastName: ['', [Validators.required, Validators.pattern('^([A-Z][a-z- ]{2,30}\s*){1,5}$')]],
            email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    //check if some form fields are dirty, used if form is canceled 
    checkIfDirty(){
        this.isDirty = this.f.firstName.dirty && this.f.lastName.valid || this.f.lastName.valid && this.f.lastName.dirty || this.f.email.valid && this.f.email.dirty || this.f.username.valid && this.f.username.dirty || this.f.password.valid && this.f.password.dirty;
    }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}