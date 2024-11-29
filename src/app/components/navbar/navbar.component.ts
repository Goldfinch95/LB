import { Component, OnInit } from '@angular/core';
import { ContainerLogoComponent } from './container-logo';
import { ContainerNavLinksComponent } from './container-nav-links';
import { NgClass } from '@angular/common';
import { WindowSizeService } from '../../services/window-size.service';
import { NavLinkElementComponent } from "./nav-link-element/nav-link-element.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ContainerLogoComponent, ContainerNavLinksComponent, NgClass, NavLinkElementComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navbarCollapsed = true;
  isLargeScreen = false;  // Propiedad para detectar si la pantalla es grande

  // Método para alternar el colapso del navbar
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  // Constructor para inyectar el servicio
  constructor(private windowSizeService: WindowSizeService) {}

  // ngOnInit para observar el tamaño de la ventana
  ngOnInit() {
    // Suscripción a los cambios del tamaño de la ventana
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.isLargeScreen = width > 750; // Determina si la pantalla es más grande que 475px
    });
  }
}
