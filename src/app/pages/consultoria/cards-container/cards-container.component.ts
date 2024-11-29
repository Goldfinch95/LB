import { CardOverlayImageComponent } from '../../../components/card-overlay-image';
import { Component } from '@angular/core';
import * as serviceData from '../../../../assets/services.json';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardOverlayImageComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css',
})
export class CardsContainerComponent {
  ServiceList: any = serviceData.data;

  title: string = 'title';

  constructor(private sharedDataService: SharedDataService) {}

  onCardSelect(servicePage: any): void {
    // Aquí recibes los datos de la carta seleccionada
    this.sharedDataService.setSelectedCard(servicePage);
    console.log('Carta seleccionada:', servicePage);
  }
  
}
