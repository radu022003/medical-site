import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'about-page',
    templateUrl: 'about-page.component.html',
    styleUrls:['about-page.style.css']
})
export class AboutComponent implements OnInit{

    contents: string[]
    content: string
    imgSrc: number

    ngOnInit(){
        this.contents = [
            "continut Profil",
            "continut experienta",
            "continut viziune"
        ];
        this.content = this.contents[0];
    }

    displayInfo(event){
        let target = event.target || event.srcElement || event.currentTarget;
        let list = target.parentNode.parentNode.getElementsByTagName('a');
        for(let i =0; i < 3; i++){
            list[i].classList.remove('active');
        }
        target.classList.add('active')
        if (target.text == 'Profil') {
            this.content = this.contents[0];
            this.imgSrc = 1;
        }

        if (target.text == 'Experiență') {
            this.content = this.contents[1];
            this.imgSrc = 2;
        }

        if (target.text == 'Viziune') {
            this.content = this.contents[2];
            this.imgSrc = 3;
        }
    }
}