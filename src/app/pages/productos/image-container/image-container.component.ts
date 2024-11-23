import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.css',
})
export class ImageContainerComponent {
  image: string = './assets/img/productos/productos.webp';
}
