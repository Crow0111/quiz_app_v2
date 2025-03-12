import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen:boolean=true;
  burgerButton = '🟰';

  toggleMenu(){
    this.isOpen = !this.isOpen;
    this.burgerButton = this.isOpen?'❌':'🟰';
  }
}
