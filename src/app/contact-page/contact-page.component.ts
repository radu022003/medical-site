import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Form, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContactService, IContact, restrictedWords } from "../shared/index";


@Component({
    selector: 'contact-page',
    templateUrl: "contact-page.component.html",
    styles:[`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input, .error textarea {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder {color: #999;}
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
    `]
})
export class ContactComponent implements OnInit{
    public newContactForm: FormGroup
    public name: FormControl
    public email: FormControl
    public message: FormControl

    isDirty: boolean = true;
    constructor(private router:Router, private contactService: ContactService){

    }

    checkIfDirty(){
        this.isDirty = this.name.dirty && this.name.valid || this.email.valid && this.email.dirty || this.message.valid && this.message.dirty;
    }

    ngOnInit(){
        this.name = new FormControl('', [Validators.required, Validators.pattern('^([A-Z][a-z- ]{2,30}\s*){2,5}$')]);
        this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]);
        this.message = new FormControl('', [Validators.maxLength(400), Validators.minLength(4), Validators.required, restrictedWords(['drac', 'puli', 'pula', 'pule', 'pizd', 'fuck', 'cock', 'suge', 'sugi'])]);

        this.newContactForm = new FormGroup({
            name: this.name,
            email: this.email,
            message: this.message
        });
        this.isDirty = this.name.dirty || this.email.dirty || this.message.dirty;
    }

    sendContact(formValues){
        formValues.email = formValues.email.toLowerCase();
        this.contactService.sendEmail(<IContact>formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/home']);
        });
        
    }

    cancel(){
        this.router.navigate(['/home']);
    }
}