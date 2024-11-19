import { Component } from '@angular/core';
import { NavLinkElement } from '../models';
import { NavLinkElementComponent } from '../nav-link-element/nav-link-element.component';

@Component({
  selector: 'app-container-nav-links',
  standalone: true,
  imports: [ NavLinkElementComponent,],
  templateUrl: './container-nav-links.component.html',
  styleUrl: './container-nav-links.component.css',
})
export class ContainerNavLinksComponent {
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
