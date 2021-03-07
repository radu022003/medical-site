import { Component } from '@angular/core';

@Component({
  selector: 'medical-app',
  template: `
    <div class="page">
      <div class="content">
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
      </div>
      <div class="footer">
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['medical-app.style.css']
})
export class MedicalAppComponent {
  title = 'medical-site';
}
