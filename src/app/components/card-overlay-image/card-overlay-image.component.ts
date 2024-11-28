import { Component, Input } from '@angular/core';
import { Elemento } from '../../pages/consultoria/models';
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
  @Input() serviceElement: Elemento = {
    title: '',
    name: '',
    imagen: '',
    link: '',
    imagen_adicional_1: '',
    imagen_adicional_2: '',
    texto: '',
  };
  constructor(private sharedDataService: SharedDataService) {}

  selectCard() {
    console.log('Dato enviado desde el hijo:', this.serviceElement.title); // Debug
    this.sharedDataService.setSelectedCard(this.serviceElement.title); // Enviar el dato al servicio
  }
}
