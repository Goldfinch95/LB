import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import * as serviceData from '../../../assets/services.json'

@Component({
  selector: 'app-consultoria',
  standalone: true,
  imports: [NavbarComponent,RouterLink, FooterComponent],
  templateUrl: './consultoria.component.html',
  styleUrl: './consultoria.component.css'
})
export class ConsultoriaComponent {

  SERVICES: any = serviceData;
}
