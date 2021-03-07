import { Component, Input } from "@angular/core"; 

@Component({
    selector: 'about-thumbnail',
    templateUrl: 'thumbnail.component.html'
})
export class AboutThumbnailComponent{
    @Input() content: string
    @Input() link: number
}