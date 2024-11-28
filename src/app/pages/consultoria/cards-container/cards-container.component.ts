import { CardOverlayImageComponent } from '../../../components/card-overlay-image';
import { Component } from '@angular/core';
import * as serviceData from '../../../../assets/services.json';
import { ServiceElement } from '../models';
@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardOverlayImageComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css',
})
export class CardsContainerComponent {
  ServiceList: ServiceElement = serviceData;

  title: string = 'title';

  constructor() {
    
    console.log('Lista de servicios cargada:', this.ServiceList); // Debug
  }
  
}
