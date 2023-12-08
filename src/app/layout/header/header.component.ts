import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedButton: string | null = 'order';
  constructor( 
    private router: Router,
    private authService: AuthService
    ) {}

  showHeader(): boolean {
    return (this.router.url !== '' && this.router.url !== 'login');
  }

  navigateTo(path: string){
    if(this.router.url === path){
      return;
    }
    this.router.navigate([path]);
    this.selectedButton = path;
  }

  changeColor():boolean {
    return (this.router.url === 'order')
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
