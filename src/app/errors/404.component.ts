import { Component } from '@angular/core'

@Component({
  template: `
    <div class="container">
      <img src="assets/images/under_construction.jfif" class="center">
    </div>
    
  `,
  styles: [`
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }`]
})
export class Error404Component{
  constructor() {

  }

}