import { Component } from "@angular/core";
import { AccountService } from "@app/_services/account.service";

@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./nav-bar.style.css"]
})

export class NavbarComponent {
    status

    constructor(public accountService: AccountService){
        
    }

    animateButton(x){
        x.classList.toggle("change");
    }
}