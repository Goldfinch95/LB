import { Component } from '@angular/core';
import { NavLinkElement } from '../models';
import { NavLinkElementComponent } from '../nav-link-element';

@Component({
  selector: 'app-container-nav-links',
  standalone: true,
  imports: [ NavLinkElementComponent,],
  templateUrl: './container-nav-links.component.html',
  styleUrl: './container-nav-links.component.css',
})
export class ContainerNavLinksComponent {

  navbarCollapsed = true;

  // Método para alternar el colapso del navbar
  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  NavLinkList: NavLinkElement[] = [
    {
      name: 'Inicio',
      path: '/inicio',
    },
    {
      name: 'Nosotros',
      path: '/nosotros',
    },
    {
      name: 'Consultoría',
      path: '/consultoria',
    },
    {
      name: 'Servicio Técnico',
      path: '/servicio_tecnico',
    },
    {
      name: 'Productos',
      path: '/productos',
    },
    {
      name: 'Contacto',
      path: '/contacto',
    },
  ];
}
