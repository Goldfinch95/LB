import { Component } from '@angular/core';
import { ContainerLogoComponent } from './container-logo';
import { ContainerNavLinksComponent } from './container-nav-links';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ContainerLogoComponent,ContainerNavLinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
