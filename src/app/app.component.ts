import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BurguerQueen';
  constructor(private router: Router) {}

  showComponent(): boolean {
    return (this.router.url.includes('/login') || this.router.url === '');
  }
}
