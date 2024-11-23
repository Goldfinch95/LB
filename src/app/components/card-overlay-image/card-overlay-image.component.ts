import { Component, Input } from '@angular/core';
import { Elemento } from '../../pages/consultoria/models';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

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
    imagen: '',
    link: '',
  };
}
