import { Component } from '@angular/core';
import * as techServiceData from '../../../../assets/tech_services.json'
import { SharedDataService } from '../../../services/shared-data.service';
import { CardOverlayImageComponent } from '../../../components/card-overlay-image';

@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [CardOverlayImageComponent],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  ServiceList: any = techServiceData.data;



  constructor(private sharedDataService: SharedDataService) {}

  onCardSelect(servicePage: any): void {
    this.sharedDataService.setSelectedCard(servicePage);
  }
}
