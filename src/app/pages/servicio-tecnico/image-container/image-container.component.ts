import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css'
})
export class ImageContainerComponent {
  image: string = './assets/img/carousel/servicio_tecnico.webp';
}
