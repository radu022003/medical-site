import { Component } from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./nav-bar.style.css"]
})

export class NavbarComponent {
    status
    animateButton(x){
        x.classList.toggle("change");
    }
}