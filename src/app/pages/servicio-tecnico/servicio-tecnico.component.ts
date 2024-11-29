import { Component } from '@angular/core';

import * as techServiceData from '../../../assets/tech_services.json'
import { TitleContainerComponent } from '../../components/title-container';
import { ImageContainerComponent } from './image-container';
import { InfoContainerComponent } from './info-container';
import { CardsContainerComponent } from './cards-container';


@Component({
  selector: 'app-servicio-tecnico',
  standalone: true,
  imports: [TitleContainerComponent, ImageContainerComponent, InfoContainerComponent,CardsContainerComponent ],
  templateUrl: './servicio-tecnico.component.html',
  styleUrl: './servicio-tecnico.component.css'
})
export class ServicioTecnicoComponent {
  title = 'SERVICIO TÉCNICO'
}
