import { Component, Input, Output } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-card-overlay-image',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './card-overlay-image.component.html',
  styleUrl: './card-overlay-image.component.css',
})
export class CardOverlayImageComponent {
  @Input() serviceCard: any = {
    title: '',
    imagen: '',
    link: '',
  };

  @Input() servicePage: any;

  constructor(private sharedDataService: SharedDataService) {}

  // Método que se ejecuta cuando el usuario hace clic en la carta
  onCardClick(): void {
    // Almacenar los datos de la carta seleccionada en el servicio
    this.sharedDataService.setSelectedCard(this.servicePage);
  }
}
