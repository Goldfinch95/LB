import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

import { FooterComponent } from '../../components/footer/footer.component';
import * as techServiceData from '../../../assets/tech_services.json'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-servicio-tecnico',
  standalone: true,
  imports: [NavbarComponent, RouterLink, FooterComponent],
  templateUrl: './servicio-tecnico.component.html',
  styleUrl: './servicio-tecnico.component.css'
})
export class ServicioTecnicoComponent {
  SERVICES: any = techServiceData;

  constructor(){
    console.log(this.SERVICES)
  }
}
