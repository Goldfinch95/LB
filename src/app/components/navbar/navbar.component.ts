import { Component } from '@angular/core';
import { ContainerLogoComponent } from './container-logo';
import { ContainerNavLinksComponent } from './container-nav-links/container-nav-links.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ContainerLogoComponent,ContainerNavLinksComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
