import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    template: `
    <div class="card shadow  mb-5 bg-white rounded">

        <!-- Card image -->
        <img class="card-img-top img-responsive" src="http://loremflickr.com/300/300?random={{randomImageNumber}}" alt="Card image cap">

        <!-- Card content -->
        <div class="card-body">

        <!-- Title -->
        <h4 class="card-title"><a>{{title}}</a></h4>
        <!-- Text -->
        <div id="column">
            <p>{{content}}</p>
        </div>
        </div>

    </div>
    `
})
export class CardComponent {
    @Input() title: string
    @Input() content: string
    randomImageNumber: number

    constructor() {
        this.randomImageNumber = Math.random();
    }

}