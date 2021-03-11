import { Component, OnInit } from "@angular/core";
import { AccountService, AlertService } from "@app/_services";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: "user-details",
    templateUrl: "user-details.component.html",
    styleUrls: ['user-details.style.css']
})
export class UserDetailsComponent implements OnInit {
    formUser: FormGroup;
    loading = false;
    isDirty = true;
    submitted = false;

    constructor(private accountService: AccountService,
            private formBuilder: FormBuilder,
            private router: Router,
            private route: ActivatedRoute,
            private alertService: AlertService){

    }

    ngOnInit(){
        const userData= this.accountService.userValue;
        this.formUser = this.formBuilder.group({
            firstName: [userData.firstName, [Validators.required, Validators.pattern('^([A-Z][a-z- ]{2,30}\s*){1,5}$')]],
            lastName: [userData.lastName, [Validators.required, Validators.pattern('^([A-Z][a-z- ]{2,30}\s*){1,5}$')]],
            email: [userData.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            username: [userData.username, Validators.required],
            password: ['', [Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formUser.controls; }

    //check if some form fields are dirty, used if form is canceled 
    checkIfDirty(){
        this.isDirty = this.f.firstName.dirty && this.f.lastName.valid || this.f.lastName.valid && this.f.lastName.dirty || this.f.email.valid && this.f.email.dirty || this.f.username.valid && this.f.username.dirty || this.f.password.valid && this.f.password.dirty;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formUser.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.update(1, this.formUser.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success('Update successful', { keepAfterRouteChange: true });
                this.loading = false;
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
        
    }

    logout(){
        this.accountService.logout();
    }
}