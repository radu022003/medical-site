import { Component, OnInit } from "@angular/core";
import { CardComponent } from "../shared/card.component";


@Component({
    selector: 'home-page',
    templateUrl: 'home-page.component.html',
})
export class HomeComponent implements OnInit{

    cards: CardComponent[]

    constructor(){
        let card1 = new CardComponent();
        card1.title = "Titlu1 Nou";
        card1.content = "Nou conținut pentru cardul1"
        let card2 = new CardComponent();
        card2.title = "Titlu2 Nou";
        card2.content = "Nou conținut pentru cardul2"
        let card3 = new CardComponent();
        card3.title = "Titlu3 Nou";
        card3.content = "Nou conținut pentru cardul3"
        this.cards = [ card1, card2, card3];
    }

    ngOnInit(){
        
    }

    trackFunction(index, item){
        if(!item){
            return null;
        }
        return index;
    }
}