import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentNav = 'recipe'
  onNavigate(feature: string) {
    this.currentNav = feature;
  }
}
